/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-22 23:40:16
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-22 23:52:18
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/api/commonCreateSingle.ts
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

export const commonCreateSingle = Api(
  Post("/api/common/:modelName/createSingle"),
  Params<{ modelName: string }>(),
  async (params) => {
    const ctx = useContext();
    const { modelName } = ctx.params;
    if (!modelName) {
      throw new Error("请求路径缺少模型名称!");
    }
    const targetModel = db.collection(modelName);
    const result = await targetModel.insertOne({
      ...params,
    });
    return result;
  }
);
