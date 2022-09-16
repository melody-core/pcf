/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-06 15:29:43
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-06 18:27:04
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/components/TemplateList/effects/useToolBarRenderProp.tsx
 * @Description: update here
 */

import { PlusOutlined } from "@ant-design/icons";
import { BetaSchemaForm } from "@ant-design/pro-components";
import { Button, message } from "antd";
import React from "react";
import { createTemplate } from "../../../../../../api/templateApi";
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
        try {
          // await createErrorObject({
          //   ...args,
          //   createWay: 1,
          // });
          // tableActionRef.current?.reload();
          await createTemplate(args);
          message.success("创建成功");
          return true;
        } catch (error) {
          console.error(error);
          message.error(error.data?.message || error.message || "接口请求失败");
        }
      }}
    />,
  ];
  return () => result;
};
