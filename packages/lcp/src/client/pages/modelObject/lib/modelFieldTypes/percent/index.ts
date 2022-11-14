/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:24:13
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:50:38
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/percent/index.ts
 * @Description: update here
 */

import percentSrc from "../STATIC_IMGS/percent.png";

class PercentFieldType {
  label = "百分比组件";
  value = "percent";
  img = percentSrc;
}

export const MODEL_FIELD_PERCENT = new PercentFieldType();
