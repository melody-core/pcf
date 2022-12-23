/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-15 11:43:30
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 01:55:38
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/api/commonGetListApi.ts
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
import { db } from "./lib/db";

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
    const targetModel = db.collection(modelName);
    const total = await targetModel.count();
    const findWhereParams = {
      ...others,
    };
    for (const key in others) {
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
    const result = await targetModel
      .find(findWhereParams)
      .skip(pageSize * (current - 1))
      .limit(pageSize)
      .sort(sort)
      .toArray();
    return {
      data: result,
      total,
    };
  }
);
