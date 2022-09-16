/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-07 15:08:17
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-07 17:25:08
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/components/PageCreate/effects/useColumnsProp.ts
 * @Description: update here
 */

import { INIT_PAGE_CREATE_FORM_COLUMNS } from "./const";

export const useColumnsProp = () => {
  const initColumns = Array.from(INIT_PAGE_CREATE_FORM_COLUMNS);
  return {
    columns: initColumns,
  };
};
