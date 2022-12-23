/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-23 19:07:09
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-23 19:09:26
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldConfigSetup/effects/useModalContrulor.ts
 * @Description: update here
 */
import { useState, useEffect, useCallback } from "react";

export const useModalContrulor = () => {
  const [showModal, setShowModal] = useState(false);
  const modalContrulor = useCallback(
    (isShow) => () => {
      setShowModal(isShow);
    },
    []
  );
  return {
    showModal,
    modalContrulor,
  };
};
