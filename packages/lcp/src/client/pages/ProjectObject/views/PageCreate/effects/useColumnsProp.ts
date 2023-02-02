/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-07 15:08:17
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-02 15:20:58
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/PageCreate/effects/useColumnsProp.ts
 * @Description: update here
 */

// import { useEffect, useState } from "react";
import { INIT_PAGE_CREATE_FORM_COLUMNS } from "./const";

export const useColumnsProp = ({}) => {
  // const [mergeColumns, setMergeColumns] = useState(INIT_PAGE_CREATE_FORM_COLUMNS);
  // const initColumns = Array.from(INIT_PAGE_CREATE_FORM_COLUMNS);
  return {
    columns: INIT_PAGE_CREATE_FORM_COLUMNS,
  };
};
