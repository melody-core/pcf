/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-10-04 23:20:16
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-10-05 01:35:27
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/components/FieldSetup/common.tsx
 * @Description: update here
 */
import { BetaSchemaForm } from "@ant-design/pro-components";
import { SettingOutlined } from "@ant-design/icons";
import React from "react";
import { MODEL_FIELD_COLUMNS } from "./effects/const";

export const FieldSetupCommon = () => {
  return (
    <BetaSchemaForm
      columns={MODEL_FIELD_COLUMNS}
      trigger={<SettingOutlined />}
    />
  );
};
