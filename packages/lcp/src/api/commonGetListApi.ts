/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-15 11:43:30
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-02 14:03:02
 * @FilePath: /melodyLCP/packages/lcp/src/api/commonGetListApi.ts
 * @Description: update here
 */

import {
  Api,
  Get,
  Post,
  Query,
  Validate,
  Params,
  useContext,
} from "@midwayjs/hooks";
import { getTargetModelByModelName } from "./lib";
// import { db } from "./lib/db";

export const getCommonModelRecordsList = Api(
  Post("/api/common/:modelName/getList"),
  Params<{ modelName: string }>(),
  async (paramsWithSort) => {
    const ctx = useContext();
    const { modelName } = ctx.params;
    if (!modelName) {
      throw new Error("请求路径缺少模型名称!");
    }
    const { params, sort } = paramsWithSort;
    const { pageSize = 20, current = 1, ...others } = params;
    const targetModel = await getTargetModelByModelName({
      name: modelName,
    });
    if (!targetModel) {
      throw new Error(`不存在的模型: ${modelName}!`);
    }
    const total = await targetModel.count();
    const findWhereParams = {};
    for (const key in others) {
      if (others[key] || others[key] === 0) {
        if (typeof others[key] === "string") {
          // string 类型支持模糊查询
          findWhereParams[key] = {
            $regex: others[key],
          };
        } else {
          findWhereParams[key] = {
            $eq: others[key],
          };
        }
      }
    }

    const result = await targetModel
      .find(findWhereParams)
      .skip(pageSize * (current - 1))
      .limit(pageSize)
      .sort(sort);

    return {
      data: result,
      total,
    };
  }
);
