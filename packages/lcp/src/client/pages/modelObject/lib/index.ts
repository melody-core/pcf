/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-19 14:21:00
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-10 11:43:59
 * @FilePath: /lcp-asset/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/lib/index.ts
 * @Description: update here
 */

import * as ALL_MODEL_FIELD_MAP from "./modelFieldTypes";

export const ALL_MODEL_FIELD_LIST = (() => {
  const res = [];
  for (const key in ALL_MODEL_FIELD_MAP) {
    res.push(ALL_MODEL_FIELD_MAP[key]);
  }
  return res.sort((pre, next) => (next.sortNo || 0) - (pre.sortNo || 0));
})();
