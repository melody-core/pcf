/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 15:43:29
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-07 15:15:13
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/components/PageCreate/index.tsx
 * @Description: update here
 */
import React from "react";
import { BetaSchemaForm } from "@ant-design/pro-components";
import {
  INIT_PAGE_CREATE_FORM_COLUMNS,
  useCurrentProp,
  useColumnsProp,
} from "./effects";

export const PageCreate = () => {
  const { current, handleCurrentChange } = useCurrentProp();
  const { columns } = useColumnsProp();
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
        console.log("values: ", values);
        return Promise.resolve(true);
      }}
    />
  );
};

export default PageCreate;
