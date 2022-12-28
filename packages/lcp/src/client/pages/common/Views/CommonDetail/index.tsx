/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-28 19:37:09
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 19:37:10
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/common/Views/CommonDetail/index.tsx
 * @Description: update here
 */

import { NormalDetailForm } from "melody-template-core";
import React from "react";
import { useParams } from "react-router-dom";

export const CommonDetail = () => {
  const { model } = useParams();
  return (
    <NormalDetailForm
      modelConfig={{
        mainModel: model,
      }}
      actionConfig={{}}
    />
  );
};
