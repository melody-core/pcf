/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-28 17:42:36
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-10 11:46:49
 * @FilePath: /lcp-asset/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/effect.ts
 * @Description: update here
 */

import { useEffect } from "react";

export enum MODEL_MENU_KEYS {
  TP_MODEL_LIST = "business", // 模型管理
  MAIN_MODEL_LIST = "mainBody",
  BASE_MODEL_LIST = "basics",
  // MODEL_ASSOCIATION = "model_association", // 模型关联关系管理
  // DATA_GOVERNMENT = "data_government", // 数据治理 - 这个放在数据管理
  // 下面的属于增改，不植入menu
  MODEL_CREATE = "model_create",
  MODEL_EDIT = "model_edit",
}

export enum MODEL_MENU_LABELS {
  TP_MODEL_LIST = "业务模型列表",
  MAIN_MODEL_LIST = "主数据模型列表",
  BASE_MODEL_LIST = "基础模型管理",
  MODEL_ASSOCIATION = "关联关系管理",
}

export const MODEL_MENU_LABEL_MAP = new Map()
  .set(MODEL_MENU_KEYS.BASE_MODEL_LIST, MODEL_MENU_LABELS.BASE_MODEL_LIST)
  .set(MODEL_MENU_KEYS.MAIN_MODEL_LIST, MODEL_MENU_LABELS.MAIN_MODEL_LIST)
  .set(MODEL_MENU_KEYS.TP_MODEL_LIST, MODEL_MENU_LABELS.TP_MODEL_LIST);

// .set(MODEL_MENU_KEYS.MODEL_ASSOCIATION, MODEL_MENU_LABELS.MODEL_ASSOCIATION);

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
