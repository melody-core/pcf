/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:13:51
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:52:01
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/rate/index.ts
 * @Description: update here
 */
import rateSrc from "../STATIC_IMGS/star.png";

class RateFieldType {
  label = "星级组件";
  value = "rate";
  img = rateSrc;
}

export const MODEL_FIELD_RATE = new RateFieldType();
