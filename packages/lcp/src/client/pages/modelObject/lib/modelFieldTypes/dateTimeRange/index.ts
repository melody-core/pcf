/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:35:03
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 16:01:35
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/dateTimeRange/index.ts
 * @Description: update here
 */

import dateTimeRangeSrc from "../STATIC_IMGS/dateTimeRange.png";

class DateTimeRangeFieldType {
  label = "日期时间区间";
  value = "dateTimeRange";
  img = dateTimeRangeSrc;
}

export const MODEL_FIELD_DATE_TIME_RANGE = new DateTimeRangeFieldType();
