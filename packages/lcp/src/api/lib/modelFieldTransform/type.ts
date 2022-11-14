/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-14 17:07:22
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 17:15:17
 * @FilePath: /melodyLCP/packages/lcp/src/api/lib/modelFieldTransform/type.ts
 * @Description: update here
 */

import { SchemaDefinitionProperty } from "mongoose";
import { MODEL_FIELD_TYPES } from "../../const";

export interface ModelFieldTransformFnParams {
  type: MODEL_FIELD_TYPES;
  effect: Object;
}

export interface ModelFieldTransformFnResult {
  dbFieldConfig: SchemaDefinitionProperty;
}

export interface ModelFieldTransformFn {
  (o: ModelFieldTransformFnParams): ModelFieldTransformFnResult;
}
