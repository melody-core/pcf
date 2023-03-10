/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-22 23:40:16
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-03-09 16:35:54
 * @FilePath: /melodyLCP/packages/lcp/src/api/commonCreateSingle.ts
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
import { db } from "./lib/db";

export const commonCreateSingle = Api(
  Post("/api/common/:modelName/createSingle"),
  Params<{ modelName: string }>(),
  async (params) => {
    const ctx = useContext();
    const { modelName } = ctx.params;
    if (!modelName) {
      throw new Error("请求路径缺少模型名称!");
    }
    const targetModel = await getTargetModelByModelName({
      name: modelName,
    });
    if (!targetModel) {
      throw new Error(`不存在的模型: ${modelName}!`);
    }
    const result = await targetModel.create({
      ...params,
    });
    // const targetModel = db.collection(modelName);
    // const result = await targetModel.insertOne({
    //   ...params,
    // });
    return result;
  }
);
