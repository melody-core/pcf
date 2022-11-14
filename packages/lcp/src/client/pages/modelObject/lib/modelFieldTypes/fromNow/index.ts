/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:28:01
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:49:26
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/fromNow/index.ts
 * @Description: update here
 */

import fromNowSrc from "./../STATIC_IMGS/fromNow.png";

class FromNowFieldType {
  label = "相对于当前时间";
  value = "fromNow";
  img = fromNowSrc;
}

export const MODEL_FIELD_FROM_NOW = new FromNowFieldType();
