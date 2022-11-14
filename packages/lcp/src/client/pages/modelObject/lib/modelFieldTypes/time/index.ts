/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:36:00
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 16:08:03
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/time/index.ts
 * @Description: update here
 */

import timeSrc from "../STATIC_IMGS/time.png";

class TimeFieldType {
  label = "时间";
  value = "time";
  img = timeSrc;
}

export const MODEL_FIELD_TIME = new TimeFieldType();
