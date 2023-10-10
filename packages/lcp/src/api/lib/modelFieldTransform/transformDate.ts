/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-10 22:38:52
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-10 22:38:53
 * @FilePath: /melodyLCP/packages/lcp/src/api/lib/modelFieldTransform/transformDate.ts
 * @Description: update here
 */
import { ModelFieldTransformFn } from "./type";

export const transformDate: ModelFieldTransformFn = async ({ config }) => {
  const { commonSetup, individualizedSetup } = config || {};
  const { isRequired = true, isUnique = false } = commonSetup || {};
  // const { minValue, maxValue } = individualizedSetup || {}; // 个性化配置
  const dbFieldConfig = {
    type: String,
    required: isRequired,
    unique: isUnique,
    // min: minValue,
    // max: maxValue,
  };
  return {
    dbFieldConfig,
  };
};
