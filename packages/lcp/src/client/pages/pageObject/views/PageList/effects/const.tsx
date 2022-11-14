/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-29 10:54:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-06 20:55:39
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/components/PageList/effects/const.tsx
 * @Description: update here
 */

import React from "react";
import { ProColumns, ProFormColumnsType } from "@ant-design/pro-components";
import { Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { PAGE_STATUS_LIST } from "../../../../../../api/const";
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
    tip: "页面ID",
    align: "center",
  },
  {
    key: "title",
    dataIndex: "title",
    ellipsis: true,
    title: "标题",
    sorter: true,
    tip: "页面名称",
    align: "center",
    formItemProps: {
      required: true,
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
    tip: "页面状态",
    align: "center",
    formItemProps: {
      required: true,
    },
    valueType: "select",
    valueEnum: getEnum(PAGE_STATUS_LIST, true),
  },
  {
    key: "router",
    dataIndex: "router",
    title: "路由",
    tip: "页面路由",
    align: "center",
    ellipsis: true,
    formItemProps: {
      required: true,
    },
  },
  {
    key: "createAt",
    dataIndex: "createAt",
    editable: false,
    title: "创建时间",
    sorter: true,
    search: false,
    hideInForm: true,
    tip: "页面创建时间",
    align: "center",
  },
  {
    key: "updateAt",
    dataIndex: "updateAt",
    editable: false,
    title: "最后更新时间",
    sorter: true,
    search: false,
    hideInForm: true,
    tip: "页面最后更新时间",
    align: "center",
  },
];
