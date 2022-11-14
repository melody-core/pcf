/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:29:54
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:47:53
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/color/index.ts
 * @Description: update here
 */

import colorSrc from "./../STATIC_IMGS/color.png";

class ColorFieldType {
  label = "颜色选择器";
  value = "color";
  img = colorSrc;
}

export const MODEL_FIELD_COLOR = new ColorFieldType();
