/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-19 14:22:51
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 16:07:09
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/text/index.ts
 * @Description: update here
 */

import textSrc from "../STATIC_IMGS/text.png";

class InputFieldType {
  label = "文本";
  value = "text";
  img = textSrc;
}

export const MODEL_FIELD_TEXT = new InputFieldType();
