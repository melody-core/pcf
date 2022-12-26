/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-23 19:04:06
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 14:58:04
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldConfigSetup/index.tsx
 * @Description: update here
 */

import React from "react";
import { Card, Modal, Radio } from "antd";
import { SettingOutlined } from "@ant-design/icons";

import {
  useFormColumns,
  useFormValues,
  useModalContrulor,
  useTabsContrulor,
} from "./effects";
import { CONFIG_FORM_TABS } from "./effects/const";
import { BetaSchemaForm } from "@ant-design/pro-components";

import styles from "./index.module.less";

export const ModelFieldConfigSetup = ({ value, onChange, fieldType, id }) => {
  const { showModal, modalContrulor } = useModalContrulor();
  const { currentTabKey, handleTabChange } = useTabsContrulor({
    fieldType,
  });
  const { onFinish, onValuesChange, formValues, initialValues, onReset } =
    useFormValues({
      value,
      onChange,
      id,
      currentTabKey,
      modalContrulor,
    });
  const targetColumns = useFormColumns({
    currentTabKey,
    fieldType,
    formValues,
  });

  const radioBtns = CONFIG_FORM_TABS.map((tabConfig) => (
    <Radio.Button key={tabConfig.key} value={tabConfig.key}>
      {tabConfig.label}
    </Radio.Button>
  ));
  return (
    <div className={styles["icon_wrap"]}>
      <a onClick={modalContrulor(true)}>
        <SettingOutlined />
      </a>
      {showModal && (
        <Modal
          visible
          onCancel={modalContrulor(false)}
          footer={false}
          width="70vw"
        >
          <Radio.Group value={currentTabKey} onChange={handleTabChange}>
            {radioBtns}
          </Radio.Group>
          <Card>
            {targetColumns?.length ? (
              <BetaSchemaForm
                key={currentTabKey}
                initialValues={initialValues}
                layoutType="Form"
                columns={targetColumns}
                onValuesChange={onValuesChange}
                onFinish={onFinish}
                onReset={onReset}
              />
            ) : (
              `此字段类型暂不支持个性化配置`
            )}
          </Card>
        </Modal>
      )}
    </div>
  );
};
