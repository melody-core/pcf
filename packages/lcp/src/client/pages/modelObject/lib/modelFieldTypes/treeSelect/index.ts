/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:08:10
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:54:38
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/treeSelect/index.ts
 * @Description: update here
 */

import treeSelectSrc from "../STATIC_IMGS/treeSelect.png";

class TreeSelectFieldType {
  label = "树形下拉框";
  value = "treeSelect";
  img = treeSelectSrc;
}

export const MODEL_FIELD_TREE_SELECT = new TreeSelectFieldType();
