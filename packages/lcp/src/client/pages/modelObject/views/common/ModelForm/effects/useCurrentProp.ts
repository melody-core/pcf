/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 16:21:26
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-15 16:59:54
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/effects/useCurrentProp.ts
 * @Description: update here
 */

import { useEffect, useState } from "react";
import { getSearchParams } from "../../../../../../utils";
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
