/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-28 19:26:50
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-19 23:04:05
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/common/Views/CommonCreate/index.tsx
 * @Description: update here
 */
import { NormalCreateForm } from "@melody-core/melody-template-core";
import React from "react";
import { useParams } from "react-router-dom";

export const CommonCreate = () => {
  const { model } = useParams();
  return (
    <NormalCreateForm
      modelConfig={{
        mainModel: model,
      }}
      actionConfig={{}}
    />
  );
};
