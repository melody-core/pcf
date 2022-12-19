/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 16:21:26
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-19 14:03:55
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/effects/useCurrentProp.ts
 * @Description: update here
 */

import { useState } from "react";
import { UseCurrentProp } from "./type";

export const useCurrentProp: UseCurrentProp = () => {
  const [current, setCurrent] = useState(0);
  const handleCurrentChange = (next) => {
    setCurrent(next);
  };
  return {
    current,
    handleCurrentChange,
  };
};
