import { ModelFieldTransformFn } from "../lib/modelFieldTransform/type";
import {
  transformText,
  transformDigit,
  transformSelect,
  transformDate,
  transfromImage,
  transformVideo,
} from "./../lib/modelFieldTransform";

export enum MODEL_FIELD_TYPES {
  text = "text",
  digit = "digit",
  avatar = "avatar",
  cascader = "cascader",
  checkbox = "checkbox",
  code = "code",
  color = "color",
  date = "date",
  dateMonth = "dateMonth",
  dateQuarter = "dateQuarter",
  dateRange = "dateRange",
  dateTime = "dateTime",
  dateTimeRange = "dateTimeRange",
  dateWeek = "dateWeek",
  dateYear = "dateYear",
  fromNow = "fromNow",
  image = "image",
  money = "money",
  jsonCode = "jsonCode",
  password = "password",
  percent = "percent",
  progress = "progress",
  radio = "radio",
  radioButton = "radioButton",
  rate = "rate",
  second = "second",
  select = "select",
  switch = "switch",
  textarea = "textarea",
  time = "time",
  timeRange = "timeRange",
  treeSelect = "treeSelect",
  video = "video",
}

export const MODEL_FIELD_TYPE_MAP = new Map<
  MODEL_FIELD_TYPES,
  ModelFieldTransformFn
>()
  .set(MODEL_FIELD_TYPES.text, transformText)
  .set(MODEL_FIELD_TYPES.select, transformSelect)
  .set(MODEL_FIELD_TYPES.date, transformDate)
  .set(MODEL_FIELD_TYPES.image, transfromImage)
  .set(MODEL_FIELD_TYPES.video, transformVideo)
  .set(MODEL_FIELD_TYPES.digit, transformDigit);
