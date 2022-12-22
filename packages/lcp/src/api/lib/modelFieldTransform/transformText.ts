import { ModelFieldTransformFn } from "./type";

export const transformText: ModelFieldTransformFn = async ({ effect = {} }) => {
  return {
    dbFieldConfig: String,
  };
};
