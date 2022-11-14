/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:37:21
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:24:21
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/money/index.ts
 * @Description: update here
 */
import moneyImgSrc from "../STATIC_IMGS/money.png";

class MoneyFieldType {
  label = "金额输入框";
  value = "money";
  img = moneyImgSrc;
}

export const MODEL_FIELD_MONEY = new MoneyFieldType();
