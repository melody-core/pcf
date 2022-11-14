/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:16:13
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:51:27
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/radio/index.ts
 * @Description: update here
 */

import radioSrc from "../STATIC_IMGS/radio.png";

class RadioFieldType {
  label = "单选框";
  value = "radio";
  img = radioSrc;
}

export const MODEL_FIELD_RADIO = new RadioFieldType();
