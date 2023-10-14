import { ModelFieldTransformFn } from "./type";

export const transformVideo: ModelFieldTransformFn = async ({ config }) => {
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
