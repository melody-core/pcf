/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 15:43:29
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-15 17:10:56
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/index.tsx
 * @Description: update here
 */
import React, { useContext, useRef } from "react";
import { BetaSchemaForm, ProProvider } from "@ant-design/pro-components";
import {
  useCurrentProp,
  useColumnsProp,
  MODEL_FORM_CREATE_STEPS,
  MODEL_VIEW_TYPES,
} from "./effects";
import { createModel } from "../../../../../../api/modelApi";
import { xFetch } from "../../../../../utils/xFetch";
import { message } from "antd";
import { SelectWithTipImg } from "../../../../../components";
import { ModelFieldSetup } from "./components";

export const ModelFormCommon = ({ viewType = MODEL_VIEW_TYPES.CREATE }) => {
  const formRef = useRef();
  const values = useContext(ProProvider);
  const { current, handleCurrentChange } = useCurrentProp({
    formRef,
  });
  const { columns } = useColumnsProp();
  return (
    <>
      <ProProvider.Provider
        value={{
          ...values,
          valueTypeMap: {
            modelSetup: {
              render: (_, props) => {
                return (
                  <ModelFieldSetup {...props.fieldProps} mode={props.mode} />
                );
              },
              renderFormItem: (_, props) => {
                // console.log("...renderFormItem=args", ...args);
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
        <BetaSchemaForm<Record<string, any>, "modelSetup" | "xSelect">
          layoutType="StepsForm"
          current={current}
          formRef={formRef}
          steps={MODEL_FORM_CREATE_STEPS}
          columns={columns}
          onCurrentChange={handleCurrentChange}
          onFinish={async (values) => {
            console.log("values: ", values);
            const { success } = await xFetch(createModel(values));
            if (success) {
              message.success("创建模型成功");
            }
            return false;
          }}
        />
      </ProProvider.Provider>
    </>
  );
};
