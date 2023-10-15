/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 15:43:29
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 19:35:34
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/index.tsx
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
import { SelectWithTipImg } from "../../../../../components";
import { ModelFieldConfigSetup } from "./components";

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
            modelFieldConfigSetup: {
              renderFormItem: (_, props) => {
                return (
                  <ModelFieldConfigSetup
                    {...props.fieldProps}
                    mode={props.mode}
                    formMapRef={formMapRef}
                  />
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
          "xSelect" | "modelFieldConfigSetup"
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
