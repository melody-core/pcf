/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-15 17:03:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-23 00:56:44
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldSetup/index.tsx
 * @Description: update here
 */
import React, { useEffect, useRef } from "react";
import { ToolOutlined } from "@ant-design/icons";
import { BetaSchemaForm } from "@ant-design/pro-components";

import styles from "./index.module.less";
import { useColumnsProp } from "./effects";
import { message } from "antd";

const INDEX_REG = /_(\d+)_/;

export const ModelFieldSetup = ({ value, onChange, mode, fieldType, id }) => {
  const targetIndexStr = id.match(INDEX_REG)?.[1];
  const cuValuesRef = useRef(
    value || {
      [targetIndexStr]: {
        isRequired: true,
        isUnique: false,
        isEditable: true,
      },
    }
  );
  useEffect(() => {
    if (!value) {
      onChange && onChange(cuValuesRef.current);
    }
  }, []);

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
      initialValues={cuValuesRef.current}
      onFinish={async () => {
        onChange && onChange(cuValuesRef.current);
        return true;
      }}
      onValuesChange={(v) => {
        cuValuesRef.current = {
          [targetIndexStr]: {
            ...cuValuesRef.current[targetIndexStr],
            ...v[targetIndexStr],
          },
        };
      }}
      layoutType="ModalForm"
    />
  );
};
