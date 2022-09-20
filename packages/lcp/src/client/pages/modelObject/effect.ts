/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-28 17:42:36
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-19 10:18:32
 * @FilePath: /todoweb/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/effect.ts
 * @Description: update here
 */

export enum MODEL_MENU_KEYS {
  MODEL_LIST = "model_list",
  // 下面的属于增改，不植入menu
  MODEL_CREATE = "model_create",
}

export enum MODEL_MENU_LABELS {
  MODEL_LIST = "模型列表",
}

export const MODEL_MENU_LABEL_MAP = (() => {
  const result = new Map();
  result.set(MODEL_MENU_KEYS.MODEL_LIST, MODEL_MENU_LABELS.MODEL_LIST);
  return result;
})();

export const MODEL_MENU_CONFIG = [
  {
    key: MODEL_MENU_KEYS.MODEL_LIST,
    value: MODEL_MENU_KEYS.MODEL_LIST,
    label: MODEL_MENU_LABEL_MAP.get(MODEL_MENU_KEYS.MODEL_LIST),
  },
];
