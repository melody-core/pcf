/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-07 15:08:17
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-19 10:34:18
 * @FilePath: /todoweb/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/components/ModelCreate/effects/useColumnsProp.ts
 * @Description: update here
 */

import { INIT_MODEL_CREATE_FORM_COLUMNS } from "./const";

export const useColumnsProp = () => {
  const initColumns = Array.from(INIT_MODEL_CREATE_FORM_COLUMNS);
  return {
    columns: initColumns,
  };
};
