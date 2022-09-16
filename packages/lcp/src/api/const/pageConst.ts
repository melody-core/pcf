export enum PAGE_STATUS_ENUM {
  NORMAL = "NORMAL",
  CLOSE = "CLOSE",
}

export const PAGE_STATUS_LIST = [
  {
    value: PAGE_STATUS_ENUM.NORMAL,
    label: PAGE_STATUS_ENUM.NORMAL,
    status: "success",
  },
  {
    label: PAGE_STATUS_ENUM.CLOSE,
    value: PAGE_STATUS_ENUM.CLOSE,
    status: "Error",
  },
];
