/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-23 19:50:01
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-23 21:25:31
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldConfigSetup/effects/useFormValues.ts
 * @Description: 注意！这个hook用以绕过ant的form嵌套时的key值的bug！
 */

import { useEffect, useRef } from "react";
import { CONFIG_FORM_TABS } from "./const";

const INDEX_REG = /_(\d+)_/;

export const useFormValues = ({
  value,
  currentTabKey,
  id,
  onChange,
  modalContrulor,
}) => {
  const targetIndexStr = id.match(INDEX_REG)?.[1];
  const cuValues = {
    [targetIndexStr]: value || {
      [CONFIG_FORM_TABS[0].key]: {
        isRequired: true,
        isUnique: false,
        isEditable: true,
      },
      [CONFIG_FORM_TABS[1].key]: {},
    },
  };
  useEffect(() => {
    if (!value) {
      onChange && onChange(cuValues[targetIndexStr]);
    }
  }, []);
  const initialValues = {
    [targetIndexStr]: cuValues[targetIndexStr][currentTabKey],
  };
  const onValuesChange = (v) => {
    cuValues[targetIndexStr] = {
      ...cuValues[targetIndexStr],
      [currentTabKey]: {
        ...cuValues[targetIndexStr][currentTabKey],
        ...v[targetIndexStr],
      },
    };
  };
  const onFinish = async () => {
    onChange && onChange(cuValues[targetIndexStr]);
    modalContrulor(false)();
  };
  const onReset = () => {
    if (currentTabKey === CONFIG_FORM_TABS[0].key) {
      onChange &&
        onChange({
          [targetIndexStr]: {
            [CONFIG_FORM_TABS[0].key]: {
              isRequired: true,
              isUnique: false,
              isEditable: true,
            },
            [CONFIG_FORM_TABS[1].key]: {
              ...cuValues[targetIndexStr][CONFIG_FORM_TABS[1].key],
            },
          },
        });
    }
    if (currentTabKey === CONFIG_FORM_TABS[1].key) {
      onChange &&
        onChange({
          [targetIndexStr]: {
            [CONFIG_FORM_TABS[0].key]: {
              ...cuValues[targetIndexStr][CONFIG_FORM_TABS[0].key],
            },
            [CONFIG_FORM_TABS[1].key]: {},
          },
        });
    }
  };
  return {
    cuValues,
    onValuesChange,
    onFinish,
    initialValues,
    onReset,
  };
};
