/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-17 17:16:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-21 21:51:30
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldCommonSetup/index.tsx
 * @Description: update here
 */
import React from "react";
import { SettingOutlined } from "@ant-design/icons";
import { BetaSchemaForm } from "@ant-design/pro-components";

import { useColumns } from "./effects";

import styles from "./index.module.less";
import { Form } from "antd";

export const ModelFieldCommonSetup = ({ value, onChange, model }) => {
  const mergeColumns = useColumns();
  const [form] = Form.useForm<Record<string, any>>();
  return (
    <BetaSchemaForm
      form={form}
      columns={mergeColumns}
      initialValues={value}
      trigger={
        <div className={styles["icon_wrap"]}>
          <a>
            <SettingOutlined />
          </a>
        </div>
      }
      onValuesChange={console.log}
      onFinish={async (values) => {
        console.log("values:", values);
        // onChange(values);
        // return true;
      }}
      submitter={null}
      layoutType="ModalForm"
    />
  );
};
