/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:04:16
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 16:08:26
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/select/index.ts
 * @Description: update here
 */

import selectSrc from "../STATIC_IMGS/select.png";
class SelectFieldType {
  label = "下拉框";
  value = "select";
  img = selectSrc;
}

export const MODEL_FIELD_SELECT = new SelectFieldType();
