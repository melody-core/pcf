/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-17 17:16:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-17 17:40:14
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldCommonSetup/index.tsx
 * @Description: update here
 */
import React from "react";
import { SettingOutlined } from "@ant-design/icons";
import { BetaSchemaForm } from "@ant-design/pro-components";

import { useColumns } from "./effects";

import styles from "./index.module.less";

export const ModelFieldCommonSetup = ({
  value,
  onChange,
  model,
  fieldType,
}) => {
  const mergeColumns = useColumns();
  return (
    <BetaSchemaForm
      columns={mergeColumns}
      trigger={
        <div className={styles["icon_wrap"]}>
          <a>
            <SettingOutlined />
          </a>
        </div>
      }
      layoutType="ModalForm"
    />
  );
};
