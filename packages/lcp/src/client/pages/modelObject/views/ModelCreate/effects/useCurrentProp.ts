/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 16:21:26
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-11 11:06:49
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/views/ModelCreate/effects/useCurrentProp.ts
 * @Description: update here
 */

import { useEffect, useState } from "react";
import { getSearchParams } from "../../../../../utils";
import {
  INIT_MODEL_CREATE_FORM_COLUMNS,
  LOCAL_STORE_CREATE_MODEL,
} from "./const";
import { UseCurrentProp } from "./type";

export const useCurrentProp: UseCurrentProp = () => {
  // const params = getSearchParams();
  const [current, setCurrent] = useState(0);
  const handleCurrentChange = (next) => {
    setCurrent(next);
  };
  return {
    current,
    handleCurrentChange,
  };
};
