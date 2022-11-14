/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-07 15:08:17
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-11 11:07:51
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/views/ModelCreate/effects/useColumnsProp.ts
 * @Description: update here
 */

import { useMemo } from "react";
import { INIT_MODEL_CREATE_FORM_COLUMNS } from "./const";

export const useColumnsProp = () => {
  const initColumns = useMemo(() => {
    return Array.from(INIT_MODEL_CREATE_FORM_COLUMNS);
  }, []);
  return {
    columns: initColumns,
  };
};
