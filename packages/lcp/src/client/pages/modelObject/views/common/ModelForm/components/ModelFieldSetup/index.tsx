/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-15 17:03:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-21 21:49:15
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldSetup/index.tsx
 * @Description: update here
 */
import React, { useRef } from "react";
import { ToolOutlined } from "@ant-design/icons";
import { BetaSchemaForm, ProForm } from "@ant-design/pro-components";

import styles from "./index.module.less";
import { useColumnsProp } from "./effects";
import { message, Modal } from "antd";

export const ModelFieldSetup = ({ value, onChange, mode, fieldType }) => {
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
      component={false}
      columns={[...mergeColumns]}
      trigger={
        <div className={styles["icon_wrap"]}>
          <a>
            <ToolOutlined />
          </a>
        </div>
      }
      // initialValues={value}
      onFieldsChange={console.log}
      onFinish={async (values) => {
        console.log("values:", values);
      }}
      layoutType="ModalForm"
    />
  );
};
