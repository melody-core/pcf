/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:31:12
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:24:12
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/dateTime/index.ts
 * @Description: update here
 */
import dateTimeSrc from "../STATIC_IMGS/dateTime.png";

class DateTimeFieldType {
  label = "日期时间";
  value = "dateTime";
  img = dateTimeSrc;
}

export const MODEL_FIELD_DATE_TIME = new DateTimeFieldType();
