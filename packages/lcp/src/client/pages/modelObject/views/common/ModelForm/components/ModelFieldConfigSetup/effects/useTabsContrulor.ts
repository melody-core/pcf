/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-23 19:17:02
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-23 21:03:32
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldConfigSetup/effects/useTabsContrulor.ts
 * @Description: update here
 */

import { message, RadioChangeEvent } from "antd";
import { useState } from "react";
import { CONFIG_FORM_TABS } from "./const";

export const useTabsContrulor = ({ fieldType }) => {
  const [currentTabKey, setCurrentKey] = useState(CONFIG_FORM_TABS[0].key);
  const handleTabChange = (e: RadioChangeEvent) => {
    const targetKey = e.target.value;
    if (targetKey === CONFIG_FORM_TABS[1].key && !fieldType) {
      message.warn("选择字段类型后才可以进行对应的个性化配置!");
      return;
    }
    setCurrentKey(e.target.value);
  };
  return {
    currentTabKey,
    handleTabChange,
  };
};
