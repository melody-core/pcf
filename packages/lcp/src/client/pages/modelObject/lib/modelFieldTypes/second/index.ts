/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:25:40
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:52:50
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/second/index.ts
 * @Description: update here
 */
import secondSrc from "../STATIC_IMGS/second.png";
class SecondFieldType {
  label = "秒格式化";
  value = "second";
  img = secondSrc;
}

export const MODEL_FIELD_SECOND = new SecondFieldType();
