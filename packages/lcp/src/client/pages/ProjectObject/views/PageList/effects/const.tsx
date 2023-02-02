/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-29 10:54:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-02 16:02:36
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/PageList/effects/const.tsx
 * @Description: update here
 */

import React from "react";
import { ProColumns, ProFormColumnsType } from "@ant-design/pro-components";
import { PAGE_STATUS_LIST } from "../../../../../../api/const";
import { getEnum } from "../../../../../utils";

export const INIT_COLUMN_LIST: (ProColumns<Record<string, any>, "text"> &
  ProFormColumnsType<Record<string, any>, "text">)[] = [
  {
    key: "title",
    dataIndex: "title",
    ellipsis: true,
    title: "应用名称(中文)",
    sorter: true,
    tip: "应用名称(中文)",
    align: "center",
  },
  {
    key: "name",
    dataIndex: "name",
    ellipsis: true,
    title: "应用名称(英文)",
    sorter: true,
    tip: "应用名称(英文), 命名唯一",
    align: "center",
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
    tip: "页面状态",
    align: "center",
    valueType: "select",
    valueEnum: getEnum(PAGE_STATUS_LIST, true),
  },
  {
    key: "createAt",
    dataIndex: "createdAt",
    editable: false,
    title: "创建时间",
    sorter: true,
    search: false,
    hideInForm: true,
    tip: "页面创建时间",
    render: (v: any) => new Date(v).toLocaleString(),
    align: "center",
  },
  {
    key: "updateAt",
    dataIndex: "updatedAt",
    render: (v: any) => new Date(v).toLocaleString(),
    editable: false,
    title: "最后更新时间",
    sorter: true,
    search: false,
    hideInForm: true,
    tip: "页面最后更新时间",
    align: "center",
  },
];
