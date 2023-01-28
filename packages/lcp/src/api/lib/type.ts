/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-10 15:52:10
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-11 15:01:47
 * @FilePath: /melodyLCP/packages/lcp/src/api/lib/type.ts
 * @Description: update here
 */

import { InferSchemaType, Model, ObtainSchemaGeneric, Schema } from "mongoose";

export interface CreateDBModelParams {
  modelSchema: Record<string, any>;
  definition?: any;
  modelName: string;
}

export interface DropCollectionParams {
  modelName: string;
}

export type TSchema = Schema<
  any,
  Model<any, any, any, any, any>,
  {},
  {},
  {},
  {},
  "type",
  {}
>;
export interface TP_MODELS_TYPE {
  [key: string]: Model<
    InferSchemaType<TSchema>,
    ObtainSchemaGeneric<TSchema, "TQueryHelpers">,
    ObtainSchemaGeneric<TSchema, "TInstanceMethods">,
    {},
    TSchema
  > &
    ObtainSchemaGeneric<TSchema, "TStaticMethods">;
}
