/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:09:05
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 16:06:49
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/checkbox/index.ts
 * @Description: update here
 */

import checkboxSrc from "../STATIC_IMGS/checkbox.png";

class CheckboxFieldType {
  label = "多选框";
  value = "checkbox";
  img = checkboxSrc;
}

export const MODEL_FIELD_CHECKBOX = new CheckboxFieldType();
