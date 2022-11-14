export enum MODEL_FIELD_TYPES {
  text = "text",
  digit = "digit",
}

export const MODEL_FIELD_TYPE_MAP = new Map()
  .set(MODEL_FIELD_TYPES.text, String)
  .set(MODEL_FIELD_TYPES.digit, Number);
