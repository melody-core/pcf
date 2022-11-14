/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-28 17:42:36
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 17:24:46
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/effect.ts
 * @Description: update here
 */

import { useEffect } from "react";

export enum MODEL_MENU_KEYS {
  MODEL_LIST = "model_list", // 模型管理
  MODEL_ASSOCIATION = "model_association", // 模型关联关系管理
  // DATA_GOVERNMENT = "data_government", // 数据治理 - 这个放在数据管理
  // 下面的属于增改，不植入menu
  MODEL_CREATE = "model_create",
}

export enum MODEL_MENU_LABELS {
  MODEL_LIST = "模型列表",
  MODEL_ASSOCIATION = "关联关系管理",
}

export const MODEL_MENU_LABEL_MAP = new Map()
  .set(MODEL_MENU_KEYS.MODEL_LIST, MODEL_MENU_LABELS.MODEL_LIST)
  .set(MODEL_MENU_KEYS.MODEL_ASSOCIATION, MODEL_MENU_LABELS.MODEL_ASSOCIATION);

export const MODEL_MENU_CONFIG = (() => {
  const result: {
    key: MODEL_MENU_KEYS;
    value: MODEL_MENU_KEYS;
    label: MODEL_MENU_LABELS;
  }[] = [];
  MODEL_MENU_LABEL_MAP.forEach((label, value) => {
    result.push({
      key: value,
      value,
      label,
    });
  });
  return result;
})();

export const useInitMenuSelected = ({ setSelectedKeys }) => {
  useEffect(() => {
    const targetKey = (
      MODEL_MENU_CONFIG.find((item) => location.pathname.match(item.value)) ||
      MODEL_MENU_CONFIG[0]
    ).value;
    setSelectedKeys(targetKey);
  });
};
