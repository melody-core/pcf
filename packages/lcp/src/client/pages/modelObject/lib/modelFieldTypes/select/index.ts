/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:04:16
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-10 11:44:44
 * @FilePath: /lcp-asset/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/select/index.ts
 * @Description: update here
 */

import selectSrc from "../STATIC_IMGS/select.png";
class SelectFieldType {
  label = "下拉框";
  value = "select";
  img = selectSrc;
  sortNo = 8;
}

export const MODEL_FIELD_SELECT = new SelectFieldType();
