/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-06 15:29:43
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-11 10:20:25
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/views/TemplateList/effects/useToolBarRenderProp.tsx
 * @Description: update here
 */

import { PlusOutlined } from "@ant-design/icons";
import { BetaSchemaForm } from "@ant-design/pro-components";
import { Button, message } from "antd";
import React from "react";
import { createTemplate } from "../../../../../../api/templateApi";
import { xFetch } from "../../../../../utils/xFetch";
import { INIT_TEM_LIST_COLUMNS } from "./const";

export const useToolBarRenderProp = () => {
  const result = [
    <BetaSchemaForm
      layoutType="ModalForm"
      trigger={
        <Button key="button" icon={<PlusOutlined />} type="primary">
          新建
        </Button>
      }
      width="65vw"
      title="录入页面模板"
      columns={INIT_TEM_LIST_COLUMNS}
      shouldUpdate={true}
      style={{ overflowY: "scroll", maxHeight: "65vh" }}
      onFinish={async (args) => {
        const { success } = await xFetch(createTemplate(args));
        success && message.success("创建成功");
        // tableActionRef.current?.reload();
        return true;
      }}
    />,
  ];
  return () => result;
};
