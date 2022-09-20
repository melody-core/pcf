/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 16:21:26
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-05 16:31:41
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/components/PageCreate/effects/useCurrentProp.ts
 * @Description: update here
 */

import { useState } from "react";
import { useParams } from "react-router-dom";

export const useCurrentProp = () => {
  const params = useParams();
  const [current, setCurrent] = useState(params.current ? +params.current : 0);
  const handleCurrentChange = (next) => {
    setCurrent(next);
    history.replaceState(null, null, `${location.pathname}?current=${next}`);
  };
  return {
    current,
    handleCurrentChange,
  };
};
