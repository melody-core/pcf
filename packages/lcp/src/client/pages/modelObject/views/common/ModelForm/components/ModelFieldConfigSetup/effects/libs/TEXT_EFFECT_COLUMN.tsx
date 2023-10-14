import { ProFormColumnsType } from "@ant-design/pro-components";

export const TEXT_EFFECT_COLUMN: ProFormColumnsType<
  Record<string, any>,
  "text"
>[] = [
  {
    dataIndex: "defaultValue",
    title: "默认值",
    tooltip: "非必填,创建时如果不填此字段值,则落库为默认值",
  },
  // {
  //   dataIndex: "minLength",
  //   title: "最小长度",
  //   fieldProps: {
  //     placeholder: 0,
  //   },
  //   valueType: "digit",
  //   tooltip: "非必填,将会检查字段值长度是否不小于给定的数字,默认为0",
  // },
  {
    dataIndex: "maxLength",
    title: "最大长度",
    valueType: "digit",
    tooltip: "非必填,将会检查字段值长度是否不大于给定的数字",
  },
];
