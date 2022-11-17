/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-17 11:21:30
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-17 17:28:48
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldSetup/const/const.tsx
 * @Description: update here
 */

// 通用是否radio项
export const NORMAL_RADIO_GROUP_IS = [
  {
    label: "是",
    value: true,
  },
  {
    label: "否",
    value: false,
  },
];

// select-type options
export enum SELECT_SOURCE_TYPES {
  ENUM = "ENUM", // 枚举
  RELATION = "RELATION", // 关联
}

export const SELECT_SOURCE_OPTIONS = [
  {
    label: "枚举",
    value: SELECT_SOURCE_TYPES.ENUM,
  },
  {
    label: "关联",
    value: SELECT_SOURCE_TYPES.RELATION,
  },
];
