/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-15 17:35:26
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-17 17:49:37
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldSetup/effects/useColumnsProp.tsx
 * @Description: update here
 */
import { FIELD_TYPE_CONFIG_COLUMN_MAP } from "./../const";

export const useColumnsProp = ({ fieldType, mode }) => {
  if (!fieldType) {
    return [];
  }
  const targetColumns = FIELD_TYPE_CONFIG_COLUMN_MAP.get(fieldType) || [];
  // todo - mode
  return targetColumns;
};
