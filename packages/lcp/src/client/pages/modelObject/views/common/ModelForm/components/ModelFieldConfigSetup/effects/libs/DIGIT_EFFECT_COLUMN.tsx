import { ProFormColumnsType } from "@ant-design/pro-components";

export const DIGIT_EFFECT_COLUMN: ProFormColumnsType<
  Record<string, any>,
  "text"
>[] = [
  {
    dataIndex: "minValue",
    valueType: "digit",
    title: "最小值",
    tooltip: "非必填,最小值",
  },
  {
    dataIndex: "maxValue",
    valueType: "digit",
    title: "最大值",
    tooltip: "非必填,最大值",
  },
];
