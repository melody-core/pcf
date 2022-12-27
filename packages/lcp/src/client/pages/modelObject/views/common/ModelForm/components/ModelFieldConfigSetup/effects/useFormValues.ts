/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-23 19:50:01
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 17:31:44
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldConfigSetup/effects/useFormValues.ts
 * @Description: 注意！这个hook用以绕过ant的form嵌套时的key值的bug！
 */

import { useEffect, useRef } from "react";
import { COMMON_INIT_VALUES, CONFIG_FORM_TABS } from "./const";

const INDEX_REG = /_(\d+)_/;

export const useFormValues = ({
  value,
  currentTabKey,
  id,
  onChange,
  modalContrulor,
}) => {
  const formValuesRef = useRef<Record<string, any>>();
  const targetIndexStr = id.match(INDEX_REG)?.[1];
  const cuValues = {
    [targetIndexStr]: value || {
      [CONFIG_FORM_TABS[0].key]: {
        ...COMMON_INIT_VALUES,
      },
      [CONFIG_FORM_TABS[1].key]: {},
    },
  };
  formValuesRef.current = cuValues[targetIndexStr];
  useEffect(() => {
    if (!value) {
      onChange && onChange(cuValues[targetIndexStr]);
    }
  }, []);
  const initialValues = {
    [targetIndexStr]: cuValues[targetIndexStr][currentTabKey],
  };
  const onValuesChange = (v) => {
    const target = v[targetIndexStr] || {};
    const targetKey = Object.keys(target)?.[0];
    if (targetKey) {
      if (Array.isArray(target[targetKey])) {
        const targetIndex = target[targetKey].findIndex(
          (item) => item || item === 0 || item === ""
        );
        if (targetIndex > -1) {
          if (!cuValues[targetIndexStr][currentTabKey][targetKey]) {
            cuValues[targetIndexStr][currentTabKey][targetKey] =
              target[targetKey];
          } else {
            if (typeof target[targetKey][targetIndex] === "object") {
              cuValues[targetIndexStr][currentTabKey][targetKey][targetIndex] =
                {
                  ...(cuValues[targetIndexStr][currentTabKey][targetKey][
                    targetIndex
                  ] || {}),
                  ...target[targetKey][targetIndex],
                };
            } else {
              cuValues[targetIndexStr][currentTabKey][targetKey][targetIndex] =
                target[targetKey][targetIndex];
            }
          }
        }
      } else {
        cuValues[targetIndexStr][currentTabKey] = {
          ...cuValues[targetIndexStr][currentTabKey],
          ...v[targetIndexStr],
        };
      }
    }
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
              ...COMMON_INIT_VALUES,
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
    formValues: formValuesRef,
    onValuesChange,
    onFinish,
    initialValues,
    onReset,
  };
};
