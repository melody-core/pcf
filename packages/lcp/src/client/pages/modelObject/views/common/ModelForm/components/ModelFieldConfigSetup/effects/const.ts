/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-23 19:14:32
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 17:31:15
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldConfigSetup/effects/const.ts
 * @Description: update here
 */

import { ProFormColumnsType } from "@ant-design/pro-components";
import {
  MODEL_FIELD_DIGIT,
  MODEL_FIELD_TEXT,
  MODEL_FIELD_SELECT,
} from "./../../../../../../lib/modelFieldTypes";

import {
  TEXT_EFFECT_COLUMN,
  SELECT_EFFECT_COLUMN,
  DIGIT_EFFECT_COLUMN,
} from "./libs";

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
  | ProFormColumnsType<Record<string, any>, "text">[]
  | ((o: any) => ProFormColumnsType<Record<string, any>, "text">[])
>()
  .set(MODEL_FIELD_TEXT.value, TEXT_EFFECT_COLUMN)
  .set(MODEL_FIELD_SELECT.value, SELECT_EFFECT_COLUMN)
  .set(MODEL_FIELD_DIGIT.value, DIGIT_EFFECT_COLUMN);

// 通用配置定义
export const FIELD_COMMON_CONFIG_COLUMN: ProFormColumnsType<
  Record<string, any>,
  "text"
>[] = [
  {
    title: "是否必须",
    dataIndex: "isRequired",
    valueType: "switch",
    tooltip: "对于此模型对应的数据而言，此字段是否必传",
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
    tooltip: "对于此模型对应的数据而言，此字段是否唯一",
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
    tooltip: "对于此模型对应的数据而言，此字段是否可编辑",
    valueType: "switch",
    fieldProps: {
      options: WHETHER_OPTIONS,
    },
    formItemProps: {
      required: true,
    },
  },
  {
    title: "是否配置为筛选搜索项",
    dataIndex: "isAllowedSearch",
    tooltip: "在列表页中，是否将此字段列为列表筛选搜索项, 默认为true",
    valueType: "switch",
    fieldProps: {
      options: WHETHER_OPTIONS,
    },
    formItemProps: {
      required: true,
    },
  },
  {
    title: "字段描述",
    dataIndex: "desc",
    valueType: "textarea",
    tooltip:
      "您可以对此字段设置一个描述，这将会在创建数据时对此字段添加设置提示功能",
  },
];

export const COMMON_INIT_VALUES = {
  isRequired: true,
  isUnique: false,
  isEditable: true,
  isAllowedSearch: true,
};
