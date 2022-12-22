/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-17 17:17:31
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-22 21:48:09
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
    valueType: "switch",
    fieldProps: {
      options: WHETHER_OPTIONS,
    },
    formItemProps: {
      required: true,
    },
  },
  {
    title: "是否唯一",
    dataIndex: "isUnique",
    valueType: "switch",
    fieldProps: {
      options: WHETHER_OPTIONS,
    },
    formItemProps: {
      required: true,
    },
  },
  {
    title: "是否可编辑",
    dataIndex: "isEditable",
    valueType: "switch",
    fieldProps: {
      options: WHETHER_OPTIONS,
    },
    formItemProps: {
      required: true,
    },
  },
  // {
  //   title: "管理属性",
  //   dataIndex: "isEditable",
  //   valueType: "switch",
  //   fieldProps: {
  //     options: WHETHER_OPTIONS,
  //   },
  //   formItemProps: {
  //     required: true,
  //   },
  // },
];
