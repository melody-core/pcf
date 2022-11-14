/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:33:07
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 16:00:54
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/dateQuarter/index.ts
 * @Description: update here
 */

import dateQuarterSrc from "../STATIC_IMGS/dateQuarter.png";

class DateQuarterFieldType {
  label = "季度输入";
  value = "dateQuarter";
  img = dateQuarterSrc;
}

export const MODEL_FIELD_DATE_QUARTER = new DateQuarterFieldType();
