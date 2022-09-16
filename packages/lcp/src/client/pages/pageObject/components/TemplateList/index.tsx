/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 17:50:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-06 20:30:40
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/components/TemplateList/index.tsx
 * @Description: update here
 */

import { ProList } from "@ant-design/pro-components";
import { Button } from "antd";
import React from "react";
import Bread from "../../../../components/Bread";
// import * as MelodyCoreTems from "melody-template-core";
import {
  useMetasProp,
  useToolBarRenderProp,
  useRequestProps,
  useEditableProps,
} from "./effects";

export const TemplateList = () => {
  const { metas } = useMetasProp();
  const toolBarRender = useToolBarRenderProp();
  const request = useRequestProps();
  const editable = useEditableProps();
  return (
    <>
      <ProList
        headerTitle={<Bread lvs={["页面管理", "模板列表"]} />}
        request={request}
        itemLayout="vertical"
        rowKey="id"
        search={{}}
        editable={editable}
        pagination={{}}
        dateFormatter="string"
        metas={metas}
        toolBarRender={toolBarRender}
      />
    </>
  );
};

export default TemplateList;
