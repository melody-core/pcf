/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:31:45
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:25:10
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/dateWeek/index.ts
 * @Description: update here
 */
import dateWeekSrc from "./../STATIC_IMGS/dateWeek.png";

class DateWeekFieldType {
  label = "周";
  value = "dateWeek";
  img = dateWeekSrc;
}

export const MODEL_FIELD_DATE_WEEK = new DateWeekFieldType();
