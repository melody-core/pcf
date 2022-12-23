import { ModelFieldTransformFn } from "./type";

export const transformText: ModelFieldTransformFn = async ({ config }) => {
  const { commonSetup, individualizedSetup } = config || {};
  const { isRequired = true, isUnique = false } = commonSetup || {};
  const { defaultValue, minLength, maxLength } = individualizedSetup || {};
  const dbFieldConfig = {
    type: String,
    required: isRequired,
    unique: isUnique,
    default: defaultValue || "",
    minLength: minLength || 0,
    maxLength,
  };
  return {
    dbFieldConfig,
  };
};
