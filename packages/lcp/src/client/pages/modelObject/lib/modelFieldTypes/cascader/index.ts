/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:30:25
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 16:05:31
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/cascader/index.ts
 * @Description: update here
 */
import cascaderSrc from "./../STATIC_IMGS/cascader.png";

class CascaderFieldType {
  label = "级联选择器";
  value = "cascader";
  img = cascaderSrc;
}

export const MODEL_FIELD_CASCADER = new CascaderFieldType();
