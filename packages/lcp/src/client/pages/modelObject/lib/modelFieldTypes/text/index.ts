/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-19 14:22:51
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-10 11:44:39
 * @FilePath: /lcp-asset/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/text/index.ts
 * @Description: update here
 */

import textSrc from "../STATIC_IMGS/text.png";

class InputFieldType {
  label = "文本";
  value = "text";
  img = textSrc;
  sortNo = 9;
}

export const MODEL_FIELD_TEXT = new InputFieldType();
