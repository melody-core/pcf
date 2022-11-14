/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:18:01
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:51:49
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/radioButton/index.ts
 * @Description: update here
 */

import radioButton from "../STATIC_IMGS/radioButton.png";

class RadioButtonFieldType {
  label = "按钮单选框";
  value = "radioButton";
  img = radioButton;
}

export const MODEL_FIELD_RADIO_BUTTON = new RadioButtonFieldType();
