/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-02-02 22:30:24
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-02 22:55:46
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/ProjectConfig/views/MenuConfig/effects/useShowModalForm.ts
 * @Description: update here
 */

import { useRef, useState } from "react";

export const useShowModalForm = () => {
  const [showModal, setShowModal] = useState(false);
  const modalTypeRef = useRef("add");
  const cuMenuNodeRef = useRef<Record<string, any>>();
  const modalContrulor = ({ isShow, cuMenuNode = null, modalType = "add" }) => {
    cuMenuNodeRef.current = cuMenuNode;
    modalTypeRef.current = modalType;
    setShowModal(isShow);
  };
  return {
    showModal,
    cuMenuNodeRef,
    modalTypeRef,
    modalContrulor,
  };
};
