/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 16:21:26
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 11:31:52
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/pageObject/views/PageCreate/effects/useCurrentProp.ts
 * @Description: update here
 */

import { useState } from "react";
import { useParams } from "react-router-dom";

export const useCurrentProp = ({ formRef }) => {
  const params = useParams();
  const [cuTem, setCuTem] = useState(null);
  const [current, setCurrent] = useState(params.current ? +params.current : 0);
  const handleCurrentChange = (next) => {
    if (current === 0) {
      // console.log("formRef:", formRef);
      const nTem = formRef.current?.getFieldValue?.("tem");
      if (nTem) {
        setCuTem(nTem);
      }
    }
    setCurrent(next);
    history.replaceState(null, null, `${location.pathname}?current=${next}`);
  };
  return {
    current,
    cuTem,
    handleCurrentChange,
  };
};
