/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-15 19:49:17
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 19:51:46
 * @FilePath: /melodyLCP/packages/lcp/src/api/lib/modelFieldTransform/transformTable.ts
 * @Description: update here
 */
import { ModelFieldTransformFn } from "./type";

export const transformTable: ModelFieldTransformFn = async ({ config }) => {
  const { commonSetup } = config || {};
  const { isRequired = true, isUnique = false } = commonSetup || {};
  const dbFieldConfig = {
    type: Array,
    required: isRequired,
    unique: isUnique,
  };
  return {
    dbFieldConfig,
  };
};
