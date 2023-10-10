/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-10 22:39:31
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-10 22:39:32
 * @FilePath: /melodyLCP/packages/lcp/src/api/lib/modelFieldTransform/transformImage.ts
 * @Description: update here
 */
import { ModelFieldTransformFn } from "./type";

export const transfromImage: ModelFieldTransformFn = async ({ config }) => {
  const { commonSetup, individualizedSetup } = config || {};
  const { isRequired = true, isUnique = false } = commonSetup || {};
  // const { minValue, maxValue } = individualizedSetup || {}; // 个性化配置
  const dbFieldConfig = {
    type: Array,
    required: isRequired,
    unique: isUnique,
    // min: minValue,
    // max: maxValue,
  };
  return {
    dbFieldConfig,
  };
};
