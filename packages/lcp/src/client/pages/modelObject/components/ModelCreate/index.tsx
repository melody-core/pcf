/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 15:43:29
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-19 16:42:10
 * @FilePath: /todoweb/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/components/ModelCreate/index.tsx
 * @Description: update here
 */
import React from "react";
import { BetaSchemaForm } from "@ant-design/pro-components";
import { useCurrentProp, useColumnsProp } from "./effects";
import { createModel } from "../../../../../api/modelApi";

export const ModelCreate = () => {
  const { current, handleCurrentChange } = useCurrentProp();
  const { columns } = useColumnsProp();
  return (
    <BetaSchemaForm
      layoutType="StepsForm"
      current={current}
      steps={[
        {
          title: "模型基本配置",
        },
        {
          title: "模型字段配置",
        },
        {
          title: "模型高级配置",
        },
      ]}
      columns={columns}
      onCurrentChange={handleCurrentChange}
      onFinish={async (values) => {
        console.log("values: ", values);
        await createModel(values);
        return Promise.resolve(true);
      }}
    />
  );
};

export default ModelCreate;
