/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-07 17:11:55
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-15 15:25:37
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/api/lib/createCollection.ts
 * @Description: update here
 */

import mongoose from "mongoose";
import { CreateDBModelParams } from "./type";

export const createCollection = ({
  modelSchema,
  definition,
  modelName,
}: CreateDBModelParams) => {
  const schema = new mongoose.Schema(modelSchema, {
    timestamps: true,
    ...definition,
  });
  mongoose.model(modelName, schema, modelName);
  return {
    success: true,
  };
};
