/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 15:43:29
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-21 18:04:06
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/index.tsx
 * @Description: update here
 */
import React, { useContext, useRef } from "react";
import {
  BetaSchemaForm,
  ProFormInstance,
  ProProvider,
} from "@ant-design/pro-components";
import {
  useCurrentProp,
  useColumnsProp,
  MODEL_FORM_CREATE_STEPS,
  MODEL_VIEW_TYPES,
  useInitValues,
  useSubmit,
} from "./effects";
import { createModel } from "../../../../../../api/modelApi";
import { xFetch } from "../../../../../utils/xFetch";
import { message } from "antd";
import { SelectWithTipImg } from "../../../../../components";
import { ModelFieldSetup, ModelFieldCommonSetup } from "./components";

export const ModelFormCommon = ({ viewType = MODEL_VIEW_TYPES.CREATE }) => {
  const values = useContext(ProProvider);
  const formMapRef = useRef<React.MutableRefObject<ProFormInstance<any>>[]>([]);
  const { current, handleCurrentChange } = useCurrentProp({});
  const { columns } = useColumnsProp();
  useInitValues({
    formMapRef,
    viewType,
  });
  const onFinish = useSubmit({
    viewType,
  });
  return (
    <>
      <ProProvider.Provider
        value={{
          ...values,
          valueTypeMap: {
            modelCommonSetup: {
              render: (_, props) => {
                return (
                  <ModelFieldCommonSetup {...props} {...props.fieldProps} />
                );
              },
              renderFormItem: (_, props) => {
                // console.log("...renderFormItem=args", ...args);
                return (
                  <ModelFieldCommonSetup {...props} {...props.fieldProps} />
                );
              },
            },
            modelSetup: {
              renderFormItem: (_, props, ...aothers) => {
                console.log("text", props, aothers);
                return (
                  <ModelFieldSetup {...props.fieldProps} mode={props.mode} />
                );
              },
            },
            xSelect: {
              render: (text, props) => {
                return (
                  <SelectWithTipImg {...props.fieldProps} mode={props.mode} />
                );
              },
              renderFormItem: (text, props) => {
                return (
                  <SelectWithTipImg {...props.fieldProps} mode={props.mode} />
                );
              },
            },
          },
        }}
      >
        <BetaSchemaForm<
          Record<string, any>,
          "modelSetup" | "xSelect" | "modelCommonSetup"
        >
          layoutType="StepsForm"
          current={current}
          formMapRef={formMapRef}
          steps={MODEL_FORM_CREATE_STEPS}
          columns={columns}
          onCurrentChange={handleCurrentChange}
          onFinish={onFinish}
        />
      </ProProvider.Provider>
    </>
  );
};
