import { ProFormColumnsType } from "@ant-design/pro-components";

export const IMAGE_EFFECT_COLUMN: ProFormColumnsType<
  Record<string, any>,
  "text"
>[] = [
  {
    dataIndex: "maxCount",
    title: "可上传的最大图片数量",
    valueType: "digit",
    tooltip: "非必填,将会检查字段值长度是否不大于给定的数字",
  },
];
