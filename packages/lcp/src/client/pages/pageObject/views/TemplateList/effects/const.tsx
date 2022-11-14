/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-06 11:41:05
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-11 14:27:08
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/views/TemplateList/effects/const.tsx
 * @Description: update here
 */

import { FundOutlined, UserOutlined } from "@ant-design/icons";
import {
  // ProColumns,
  ProFormColumnsType,
  ProListMetas,
} from "@ant-design/pro-components";
import { Button, Tag, Image, Popconfirm, message } from "antd";
import React from "react";
import { TEM_STATUS_LIST } from "../../../../../../api/const";
import { deleteTemplateById } from "../../../../../../api/templateApi";
import { getEnum } from "../../../../../utils";

export const INIT_TEM_LIST_COLUMNS: ProFormColumnsType<any, "text">[] = [
  {
    key: "id",
    title: "编号",
    dataIndex: "id",
    hideInForm: true,
    hideInTable: true,
    editable: false,
    tip: "模板ID标识",
  },
  {
    key: "title",
    dataIndex: "title",
    title: "标题",
    tip: "模板名称",
    formItemProps: {
      required: true,
    },
  },
  {
    key: "componentName",
    dataIndex: "componentName",
    title: "组件源",
    formItemProps: {
      required: true,
    },
  },
  {
    key: "desc",
    dataIndex: "desc",
    title: "描述",
    valueType: "textarea",
  },
  //componentName
  {
    key: "status",
    dataIndex: "status",
    title: "状态",
    tip: "模板状态",
    formItemProps: {
      required: true,
    },
    valueType: "select",
    valueEnum: getEnum(TEM_STATUS_LIST, true),
  },
  {
    key: "previewSrc",
    dataIndex: "previewSrc",
    title: "预览效果",
    tip: "预览效果图",
    valueType: "image",
  },
  {
    key: "author",
    dataIndex: "author",
    title: "维护者",
    tip: "模板开发及维护人员",
  },
  {
    key: "docsSrc",
    dataIndex: "docsSrc",
    title: "文档详情",
    tip: "模板的应用场景详览",
  },
  {
    key: "createAt",
    dataIndex: "createAt",
    editable: false,
    title: "创建时间",
    hideInForm: true,
    tip: "页面创建时间",
    render: (v: any) => new Date(v).toLocaleString(),
  },
  {
    key: "updateAt",
    dataIndex: "updateAt",
    editable: false,
    title: "最后更新时间",
    hideInForm: true,
    tip: "页面最后更新时间",
    render: (v: any) => new Date(v).toLocaleString(),
  },
];

export const INIT_TEM_LIST_METAS: ProListMetas<any> = {
  title: {
    title: "标题",
  },
  description: {
    title: "状态",
    dataIndex: "status",
    valueType: "select",
    valueEnum: getEnum(TEM_STATUS_LIST, true),
    render: (text, record) => {
      const color = TEM_STATUS_LIST.find(
        (TEM) => TEM.value === text
      )?.status?.toLocaleString();
      return (
        <>
          <Tag color={color}>{text}</Tag>
          <Tag icon={<UserOutlined />} color="#55acee">
            {record.author}
          </Tag>
          <Tag icon={<FundOutlined />} color="#3b5999">
            {record.componentName}
          </Tag>
        </>
      );
    },
  },
  content: {
    title: "描述",
    dataIndex: "desc",
    // render: (text) => {
    //   return (
    //     <div>
    //       {text}
    //     </div>
    //   )
    // }
  },
  extra: {
    dataIndex: "previewSrc",
    search: false,
    render: (src) => {
      return <Image width={272} src={src} />;
    },
  },
  actions: {
    render: (text, row, index, action) => [
      <Button type="link" key="link">
        详情
      </Button>,
      <Button
        type="link"
        onClick={() => {
          action.startEditable(row._id);
        }}
        key="edit"
      >
        编辑
      </Button>,
      <Popconfirm
        key="delete"
        title="确定要删除这一条吗?"
        onConfirm={async () => {
          try {
            await deleteTemplateById({
              _id: row._id,
            });
            message.success("删除成功!");
            action.reload();
          } catch (error) {
            console.error(error);
            message.error(
              error.message || error.data?.message || "删除请求失败"
            );
          }
        }}
        okText="Yes"
        cancelText="No"
      >
        <a href="#">删除</a>
      </Popconfirm>,
    ],
  },
};
