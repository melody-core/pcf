/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-15 17:03:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-15 17:30:57
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldSetup/index.tsx
 * @Description: update here
 */
import React from "react";
import { SettingOutlined } from "@ant-design/icons";
import { BetaSchemaForm } from "@ant-design/pro-components";

import styles from "./index.module.less";

export const ModelFieldSetup = ({ value, onChange, model, fieldType }) => {
  return (
    <BetaSchemaForm
      columns={[]}
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
