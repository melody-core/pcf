import { ModelFieldTransformFn } from "./type";

export const transformDigit: ModelFieldTransformFn = async ({}) => {
  return {
    dbFieldConfig: Number,
  };
};
