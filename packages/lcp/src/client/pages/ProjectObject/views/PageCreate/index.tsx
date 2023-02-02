/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 15:43:29
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-02 16:05:19
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/PageCreate/index.tsx
 * @Description: update here
 */
import React, { useRef } from "react";
import { BetaSchemaForm } from "@ant-design/pro-components";
import {
  INIT_PAGE_CREATE_FORM_COLUMNS,
  useCurrentProp,
  useColumnsProp,
} from "./effects";
import { createProject } from "../../../../../api/projectApi";
import { xFetch } from "../../../../utils";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export const PageCreate = () => {
  const navigate = useNavigate();
  const formRef = useRef();
  // const { current, handleCurrentChange, cuTem } = useCurrentProp({
  //   formRef,
  // });
  const { columns } = useColumnsProp({
    // cuTem,
  });
  return (
    <BetaSchemaForm
      layoutType="Form"
      columns={columns}
      onFinish={async (values) => {
        const result = await xFetch(
          createProject({
            ...values,
            menuConfig: {},
            jurisdiction: {},
            pageConfig: {},
          })
        );
        const { success } = result || {};
        if (success) {
          message.success("创建成功！");
          navigate("/project_lc");
          return true;
        }
      }}
      formRef={formRef}
    />
  );
};
