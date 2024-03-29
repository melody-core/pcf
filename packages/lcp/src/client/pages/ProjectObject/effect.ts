/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-28 17:42:36
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-11-05 22:47:12
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/effect.ts
 * @Description: update here
 */

import { useEffect } from "react";

export enum PAGE_MENU_KEYS {
  PROJECT_LIST = "project_list",
  COMMON_CONFIG = "common_config",
  ACTION_LIST = "action_list",
  FILL_LIST = "fill_list",
  TEMPLATE_LIST = "template_list",
  // 下面的属于增改，不植入menu
  PAGE_CREATE = "page_create",
}

export enum PAGE_MENU_LABELS {
  PROJECT_LIST = "项目列表",
  COMMON_CONFIG = "通用配置",
  ACTION_LIST = "动作列表",
  FILL_LIST = "填充列表",
  TEMPLATE_LIST = "模板列表",
}

export const PAGE_MENU_LABEL_MAP = (() => {
  const result = new Map();
  result.set(PAGE_MENU_KEYS.PROJECT_LIST, PAGE_MENU_LABELS.PROJECT_LIST);
  result.set(PAGE_MENU_KEYS.FILL_LIST, PAGE_MENU_LABELS.FILL_LIST);
  result.set(PAGE_MENU_KEYS.COMMON_CONFIG, PAGE_MENU_LABELS.COMMON_CONFIG);
  result.set(PAGE_MENU_KEYS.ACTION_LIST, PAGE_MENU_LABELS.ACTION_LIST);
  result.set(PAGE_MENU_KEYS.TEMPLATE_LIST, PAGE_MENU_LABELS.TEMPLATE_LIST);
  return result;
})();

export const PROJECT_MENU_CONFIG = [
  {
    key: PAGE_MENU_KEYS.PROJECT_LIST,
    value: PAGE_MENU_KEYS.PROJECT_LIST,
    label: PAGE_MENU_LABEL_MAP.get(PAGE_MENU_KEYS.PROJECT_LIST),
  },
  // {
  //   key: PAGE_MENU_KEYS.ACTION_LIST,
  //   value: PAGE_MENU_KEYS.ACTION_LIST,
  //   label: PAGE_MENU_LABEL_MAP.get(PAGE_MENU_KEYS.ACTION_LIST),
  // },
  // {
  //   key: PAGE_MENU_KEYS.COMMON_CONFIG,
  //   value: PAGE_MENU_KEYS.COMMON_CONFIG,
  //   label: PAGE_MENU_LABEL_MAP.get(PAGE_MENU_KEYS.COMMON_CONFIG),
  // },
  // {
  //   key: PAGE_MENU_KEYS.FILL_LIST,
  //   value: PAGE_MENU_KEYS.FILL_LIST,
  //   label: PAGE_MENU_LABEL_MAP.get(PAGE_MENU_KEYS.FILL_LIST),
  // },
  // {
  //   key: PAGE_MENU_KEYS.TEMPLATE_LIST,
  //   value: PAGE_MENU_KEYS.TEMPLATE_LIST,
  //   label: PAGE_MENU_LABEL_MAP.get(PAGE_MENU_KEYS.TEMPLATE_LIST),
  // },
];

export const useInitMenuSelected = ({ setSelectedKeys }) => {
  useEffect(() => {
    const targetKey = (
      PROJECT_MENU_CONFIG.find((item) => location.pathname.match(item.value)) ||
      PROJECT_MENU_CONFIG[0]
    ).value;
    setSelectedKeys(targetKey);
  }, []);
};
