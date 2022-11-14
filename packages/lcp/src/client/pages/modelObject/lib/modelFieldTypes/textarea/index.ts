/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:06:20
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:24:00
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/textarea/index.ts
 * @Description: update here
 */
import textAreaSrc from "../STATIC_IMGS/textarea.png";

class TextareaFieldType {
  label = "文本域";
  value = "textarea";
  img = textAreaSrc;
}

export const MODEL_FIELD_TEXTAREA = new TextareaFieldType();
