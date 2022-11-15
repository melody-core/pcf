import { ModelFieldTransformFn } from "./type";

export const transformText: ModelFieldTransformFn = async ({}) => {
  return {
    dbFieldConfig: String,
  };
};
