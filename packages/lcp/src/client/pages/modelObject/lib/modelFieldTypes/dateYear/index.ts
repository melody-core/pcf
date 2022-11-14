/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:33:36
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 16:01:59
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/dateYear/index.ts
 * @Description: update here
 */

import dateYearSrc from "../STATIC_IMGS/dateYear.png";

class DateYearFieldType {
  label = "年份输入";
  value = "dateYear";
  img = dateYearSrc;
}

export const MODEL_FIELD_DATE_YEAR = new DateYearFieldType();
