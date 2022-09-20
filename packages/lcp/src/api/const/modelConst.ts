export enum MODEL_STATUS_ENUM {
  NORMAL = "NORMAL",
  CLOSE = "CLOSE",
}

export const MODEL_STATUS_LIST = [
  {
    value: MODEL_STATUS_ENUM.NORMAL,
    label: MODEL_STATUS_ENUM.NORMAL,
    status: "success",
  },
  {
    label: MODEL_STATUS_ENUM.CLOSE,
    value: MODEL_STATUS_ENUM.CLOSE,
    status: "Error",
  },
];

export enum MODEL_TYPE_LIST {
  // 主数据
  MASTER_DATA = "MASTER_DATA",
  // 业务数据
  BUSINESS_DATA = "BUSINESS_DATA",
  // 基础数据
  BASIC_DATA = "BASIC_DATA",
}

export enum MODEL_TYPE_LABELS {
  MASTER_DATA = "主数据",
  BUSINESS_DATA = "业务数据",
  BASIC_DATA = "基础数据",
}

export const MODEL_TYPE_CONFIG_LIST = [
  {
    label: MODEL_TYPE_LABELS.MASTER_DATA,
    value: MODEL_TYPE_LIST.MASTER_DATA,
  },
  {
    label: MODEL_TYPE_LABELS.BUSINESS_DATA,
    value: MODEL_TYPE_LIST.BUSINESS_DATA,
  },
  {
    label: MODEL_TYPE_LABELS.BASIC_DATA,
    value: MODEL_TYPE_LIST.BASIC_DATA,
  },
];
