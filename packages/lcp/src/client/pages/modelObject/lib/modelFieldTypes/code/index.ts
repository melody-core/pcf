/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:26:56
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:47:08
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/code/index.ts
 * @Description: update here
 */
import codeSrc from "../STATIC_IMGS/code.png";

class CodeFieldType {
  label = "代码框";
  value = "code";
  img = codeSrc;
}

export const MODEL_FIELD_CODE = new CodeFieldType();
