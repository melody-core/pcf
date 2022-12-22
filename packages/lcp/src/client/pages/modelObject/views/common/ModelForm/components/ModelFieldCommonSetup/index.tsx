/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-17 17:16:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-23 00:57:58
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldCommonSetup/index.tsx
 * @Description: update here
 */
import React, { useEffect, useRef } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { BetaSchemaForm } from "@ant-design/pro-components";

import { useColumns } from "./effects";

import styles from "./index.module.less";

const INDEX_REG = /_(\d+)_/;

export const ModelFieldCommonSetup = ({ value, onChange, model, id }) => {
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
