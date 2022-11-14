/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:34:30
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 16:01:12
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/dateRange/index.ts
 * @Description: update here
 */

import dateRangeSrc from "../STATIC_IMGS/dateRange.png";

class DateRangeFieldType {
  label = "日期区间";
  value = "dateRange";
  img = dateRangeSrc;
}

export const MODEL_FIELD_DATE_RANGE = new DateRangeFieldType();
