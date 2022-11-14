/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:32:21
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 16:04:57
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/dateMonth/index.ts
 * @Description: update here
 */
import dateMonthSrc from "../STATIC_IMGS/dateMonth.png";

class DateMonthFieldType {
  label = "月";
  value = "dateMonth";
  img = dateMonthSrc;
}

export const MODEL_FIELD_DATE_MONTH = new DateMonthFieldType();
