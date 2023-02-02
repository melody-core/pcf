/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-22 23:20:03
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-02 14:01:26
 * @FilePath: /melodyLCP/packages/lcp/src/api/commonGetDetailByParams.ts
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
import { Types } from "mongoose";
import { getTargetModelByModelName } from "./lib";
import { db } from "./lib/db";

export const commonGetDetailByParams = Api(
  Post("/api/common/:modelName/getDetailByParams"),
  Params<{ modelName: string }>(),
  async (params) => {
    const ctx = useContext();
    const { modelName } = ctx.params;
    if (!modelName) {
      throw new Error("请求路径缺少模型名称!");
    }
    // const targetModel = db.collection(modelName);
    const targetModel = await getTargetModelByModelName({
      name: modelName,
    });
    if (!targetModel) {
      throw new Error(`不存在的模型: ${modelName}!`);
    }
    const findParams = {};
    for (const fieldKey in params) {
      let targetV = params[fieldKey];
      if (fieldKey === "_id") {
        targetV = new Types.ObjectId(targetV);
      }
      findParams[fieldKey] = {
        $eq: targetV,
      };
    }
    const result = await targetModel.findOne(findParams);
    return result;
  }
);
