/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:07:17
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:23:48
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/date/index.ts
 * @Description: update here
 */

import dateSrc from "../STATIC_IMGS/date.png";

class DateFieldType {
  label = "日期";
  value = "date";
  img = dateSrc;
}

export const MODEL_FIELD_DATE = new DateFieldType();
