/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:36:33
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 16:08:10
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/timeRange/index.ts
 * @Description: update here
 */

import timeRangeSrc from "../STATIC_IMGS/timeRange.png";

class TimeRangeFieldType {
  label = "时间区间";
  value = "timeRange";
  img = timeRangeSrc;
}

export const MODEL_FIELD_TIME_RANGE = new TimeRangeFieldType();
