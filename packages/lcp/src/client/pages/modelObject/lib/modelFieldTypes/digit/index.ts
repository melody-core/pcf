/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:25:03
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-10 11:44:48
 * @FilePath: /lcp-asset/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/digit/index.ts
 * @Description: update here
 */

import digitSrc from "./../STATIC_IMGS/digit.png";

class DigitFieldType {
  label = "数字输入框";
  value = "digit";
  img = digitSrc;
  sortNo = 7;
}

export const MODEL_FIELD_DIGIT = new DigitFieldType();
