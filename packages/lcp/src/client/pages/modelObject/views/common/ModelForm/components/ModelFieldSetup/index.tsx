/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-15 17:03:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-17 17:57:07
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldSetup/index.tsx
 * @Description: update here
 */
import React from "react";
import { ToolOutlined } from "@ant-design/icons";
import { BetaSchemaForm } from "@ant-design/pro-components";

import styles from "./index.module.less";
import { useColumnsProp } from "./effects";
import { message } from "antd";

export const ModelFieldSetup = ({ value, onChange, mode, fieldType }) => {
  console.log("fieldType:", fieldType);
  const mergeColumns = useColumnsProp({
    fieldType,
    mode,
  });
  if (!mergeColumns?.length || !fieldType) {
    const warnTip = fieldType
      ? "此类型字段不需要个性化配置"
      : "请先配置字段类型";
    return (
      <div
        className={styles["icon_wrap"]}
        onClick={() => message.warn(warnTip)}
      >
        <a>
          <ToolOutlined />
        </a>
      </div>
    );
  }
  return (
    <BetaSchemaForm
      columns={mergeColumns}
      trigger={
        <div className={styles["icon_wrap"]}>
          <a>
            <ToolOutlined />
          </a>
        </div>
      }
      layoutType="ModalForm"
    />
  );
};
