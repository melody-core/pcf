/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-28 19:40:04
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 19:40:04
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/common/Views/CommonFilterTable/index.tsx
 * @Description: update here
 */

import { NormalFilterTableList } from "melody-template-core";
import React from "react";
import { useParams } from "react-router-dom";

export const CommonFilterTable = () => {
  const { model } = useParams();
  return (
    <NormalFilterTableList
      modelConfig={{
        mainModel: model,
      }}
      actionConfig={{}}
    />
  );
};
