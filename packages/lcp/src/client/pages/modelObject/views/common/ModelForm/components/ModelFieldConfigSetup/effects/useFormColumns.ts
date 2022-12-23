/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-23 19:36:51
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-23 19:47:00
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldConfigSetup/effects/useFormColumns.ts
 * @Description: update here
 */

import {
  CONFIG_FORM_TABS,
  FIELD_COMMON_CONFIG_COLUMN,
  FIELD_TYPE_CONFIG_COLUMN_MAP,
} from "./const";

export const useFormColumns = ({ currentTabKey, fieldType }) => {
  if (currentTabKey === CONFIG_FORM_TABS[0].key) {
    // 通用
    return FIELD_COMMON_CONFIG_COLUMN;
  }
  if (currentTabKey === CONFIG_FORM_TABS[1].key) {
    // 个性化
    if (!fieldType) {
      return [];
    }
    const targetColumns = FIELD_TYPE_CONFIG_COLUMN_MAP.get(fieldType) || [];
    return targetColumns;
  }
  return [];
};
