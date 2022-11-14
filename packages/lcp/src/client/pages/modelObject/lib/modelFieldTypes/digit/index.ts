/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:25:03
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:48:53
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/digit/index.ts
 * @Description: update here
 */

import digitSrc from "./../STATIC_IMGS/digit.png";

class DigitFieldType {
  label = "数字输入框";
  value = "digit";
  img = digitSrc;
}

export const MODEL_FIELD_DIGIT = new DigitFieldType();
