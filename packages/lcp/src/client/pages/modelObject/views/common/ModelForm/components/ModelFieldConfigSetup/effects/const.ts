/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-23 19:14:32
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-23 19:41:15
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldConfigSetup/effects/const.ts
 * @Description: update here
 */

import { ProFormColumnsType } from "@ant-design/pro-components";
import {
  MODEL_FIELD_DIGIT,
  MODEL_FIELD_TEXT,
  MODEL_FIELD_SELECT,
} from "./../../../../../../lib/modelFieldTypes";

import { TEXT_EFFECT_COLUMN, SELECT_EFFECT_COLUMN } from "./libs";

export const CONFIG_FORM_TABS = [
  {
    label: "通用配置",
    key: "commonSetup",
  },
  {
    label: "个性化配置",
    key: "individualizedSetup",
  },
];

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

// 个性化配置columns定义
export const FIELD_TYPE_CONFIG_COLUMN_MAP = new Map<
  any,
  ProFormColumnsType<Record<string, any>, "text">[]
>()
  .set(MODEL_FIELD_TEXT.value, TEXT_EFFECT_COLUMN)
  .set(MODEL_FIELD_SELECT.value, SELECT_EFFECT_COLUMN);

// 通用配置定义
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
