/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:29:17
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:50:05
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/jsonCode/index.ts
 * @Description: update here
 */
import jsonCodeSrc from "./../STATIC_IMGS/codeJson.png";

class JsonCodeFieldType {
  label = "代码框格式化";
  value = "jsonCode";
  img = jsonCodeSrc;
}

export const MODEL_FIELD_NUMBER = new JsonCodeFieldType();
