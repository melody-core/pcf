/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 15:47:49
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-02 15:21:50
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/PageCreate/effects/const.ts
 * @Description: update here
 */

import { ProFormColumnsType } from "@ant-design/pro-components";
// import { TemplateObject } from "@prisma/client";
import { getTemplateList } from "../../../../../../api/templateApi";

export const INIT_PAGE_CREATE_FORM_COLUMNS: ProFormColumnsType<
  Record<string, any>,
  "text"
>[] = [
  {
    key: "title",
    dataIndex: "title",
    title: "应用名称(中文)",
    tip: "应用名称(中文)",
    formItemProps: {
      rules: [
        {
          required: true,
          message: "此项为必填项",
        },
      ],
    },
  },
  {
    key: "name",
    dataIndex: "name",
    title: "应用名称(英文)",
    tip: "应用名称(英文), 命名唯一",
    formItemProps: {
      rules: [
        {
          required: true,
          message: "此项为必填项",
        },
      ],
    },
  },
  {
    key: "desc",
    dataIndex: "desc",
    title: "应用描述",
    valueType: "textarea",
    // width: "xs",
  },
];
