/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-17 17:17:31
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-17 17:24:54
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldCommonSetup/effects/const.ts
 * @Description: update here
 */
import { ProFormColumnsType } from "@ant-design/pro-components";

export const WHETHER_OPTIONS = [
  {
    label: "是",
    value: 1,
  },
  {
    label: "否",
    value: 0,
  },
];

export const FIELD_COMMON_CONFIG_COLUMN: ProFormColumnsType<
  Record<string, any>,
  "text"
>[] = [
  {
    title: "是否必须",
    dataIndex: "isRequired",
    valueType: "radio",
    fieldProps: {
      options: WHETHER_OPTIONS,
    },
  },
  {
    title: "是否唯一",
    dataIndex: "isUnique",
    valueType: "radio",
    fieldProps: {
      options: WHETHER_OPTIONS,
    },
  },
  {
    title: "是否可编辑",
    dataIndex: "isEditable",
    valueType: "radio",
    fieldProps: {
      options: WHETHER_OPTIONS,
    },
  },
];
