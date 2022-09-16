/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-06 11:45:14
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-06 20:52:47
 * @FilePath: /melodyLCP/packages/lcp/src/api/const/temConst.ts
 * @Description: update here
 */
export enum TEM_STATUS_ENUM {
  NORMAL = "NORMAL",
  CLOSE = "CLOSE",
}

export enum TEM_STATUS_LABELS {
  NORMAL = "启用",
  CLOSE = "停用",
}

export const TEM_STATUS_LIST = [
  {
    value: TEM_STATUS_ENUM.NORMAL,
    label: TEM_STATUS_LABELS.NORMAL,
    status: "success",
  },
  {
    label: TEM_STATUS_LABELS.CLOSE,
    value: TEM_STATUS_ENUM.CLOSE,
    status: "Error",
  },
];
