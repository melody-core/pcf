/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:27:26
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 16:07:06
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/switch/index.ts
 * @Description: update here
 */

import switchSrc from "./../STATIC_IMGS/switch.png";

class SwitchFieldType {
  label = "开关";
  value = "switch";
  img = switchSrc;
}

export const MODEL_FIELD_SWITCH = new SwitchFieldType();
