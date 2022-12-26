/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 15:43:29
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 16:10:11
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/pageObject/views/PageCreate/index.tsx
 * @Description: update here
 */
import React, { useRef } from "react";
import { BetaSchemaForm } from "@ant-design/pro-components";
import {
  INIT_PAGE_CREATE_FORM_COLUMNS,
  useCurrentProp,
  useColumnsProp,
} from "./effects";

export const PageCreate = () => {
  const formRef = useRef();
  const { current, handleCurrentChange, cuTem } = useCurrentProp({
    formRef,
  });
  const { columns } = useColumnsProp({
    cuTem,
  });
  return (
    <BetaSchemaForm
      layoutType="StepsForm"
      current={current}
      steps={[
        {
          title: "页面基本配置",
        },
        {
          title: "页面数据配置",
        },
        {
          title: "页面动作配置",
        },
      ]}
      columns={columns}
      onCurrentChange={handleCurrentChange}
      onFinish={async (values) => {
        return Promise.resolve(true);
      }}
      formRef={formRef}
    />
  );
};
