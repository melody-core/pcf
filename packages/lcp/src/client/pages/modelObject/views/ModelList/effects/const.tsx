/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-29 10:54:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-01-31 15:25:37
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/views/ModelList/effects/const.tsx
 * @Description: update here
 */

import { ProColumns, ProFormColumnsType } from "@ant-design/pro-components";
import { MODEL_STATUS_LIST } from "../../../../../../api/const";
import { getEnum } from "../../../../../utils";

export const INIT_COLUMN_LIST: (ProColumns<Record<string, any>, "text"> &
  ProFormColumnsType<Record<string, any>, "text">)[] = [
  {
    key: "id",
    title: "编号",
    dataIndex: "id",
    hideInForm: true,
    hideInTable: true,
    search: false,
    editable: false,
    tip: "模型ID",
    align: "center",
  },
  {
    key: "name",
    dataIndex: "name",
    ellipsis: true,
    title: "模型名称",
    sorter: true,
    align: "center",
    formItemProps: {
      required: true,
      // rules: []
    },
  },
  {
    key: "title",
    dataIndex: "title",
    ellipsis: true,
    title: "模型标题",
    sorter: true,
    align: "center",
    formItemProps: {
      required: true,
      // rules: []
    },
  },
  {
    key: "desc",
    dataIndex: "desc",
    ellipsis: true,
    title: "描述",
    align: "center",
    width: "xs",
  },
  {
    key: "status",
    dataIndex: "status",
    title: "状态",
    tip: "模型状态",
    align: "center",
    formItemProps: {
      required: true,
    },
    valueType: "select",
    valueEnum: getEnum(MODEL_STATUS_LIST, true),
  },
  {
    key: "createdAt",
    dataIndex: "createdAt",
    editable: false,
    title: "创建时间",
    sorter: true,
    search: false,
    hideInForm: true,
    tip: "模型创建时间",
    align: "center",
    render: (v: any) => new Date(v).toLocaleString(),
  },
  {
    key: "updatedAt",
    dataIndex: "updatedAt",
    editable: false,
    title: "最后更新时间",
    sorter: true,
    search: false,
    hideInForm: true,
    tip: "模型最后更新时间",
    align: "center",
    render: (v: any) => new Date(v).toLocaleString(),
  },
];
