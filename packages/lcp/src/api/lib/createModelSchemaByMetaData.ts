/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-01-28 14:50:53
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-01-28 15:14:23
 * @FilePath: /melodyLCP/packages/lcp/src/api/lib/createModelSchemaByMetaData.ts
 * @Description: update here
 */

import { MODEL_FIELD_TYPE_MAP } from "../const";

export const createModelSchemaByMetaData = async ({ fields }: any) => {
  const modelSchema = {};
  if (!fields) {
    return modelSchema;
  }
  for (const fieldOptions of fields) {
    const { fieldName, type, config = {} } = fieldOptions || {};
    modelSchema[fieldName] = String;
    // todo
    const targetTransformFn = MODEL_FIELD_TYPE_MAP.get(type);
    if (targetTransformFn) {
      const { dbFieldConfig } = await targetTransformFn({
        type,
        config,
      });
      modelSchema[fieldName] = dbFieldConfig;
    }
  }
  return modelSchema;
};
