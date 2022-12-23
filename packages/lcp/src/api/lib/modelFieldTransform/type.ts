/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-14 17:07:22
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-23 20:48:38
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/api/lib/modelFieldTransform/type.ts
 * @Description: update here
 */

import { SchemaDefinitionProperty } from "mongoose";
import { MODEL_FIELD_TYPES } from "../../const";

export interface CommonSetup {
  isEditable: boolean;
  isRequired: boolean;
  isUnique: boolean;
}
export interface ModelFieldTransformFnParams {
  type: MODEL_FIELD_TYPES;
  config: {
    commonSetup: CommonSetup;
    individualizedSetup: Record<string, any>;
  };
}

export interface ModelFieldTransformFnResult {
  dbFieldConfig: SchemaDefinitionProperty;
}

export interface ModelFieldTransformFn {
  (o: ModelFieldTransformFnParams): PromiseLike<ModelFieldTransformFnResult>;
}
