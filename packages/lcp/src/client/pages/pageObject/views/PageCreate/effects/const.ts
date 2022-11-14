/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 15:47:49
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-08 14:32:05
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/components/PageCreate/effects/const.ts
 * @Description: update here
 */

import { ProFormColumnsType } from "@ant-design/pro-components";
import { TemplateObject } from "@prisma/client";
import { getTemplateList } from "../../../../../../api/templateApi";

export const INIT_PAGE_CREATE_FORM_COLUMNS: ProFormColumnsType<
  Record<string, any>,
  "text"
>[][] = [
  [
    {
      title: "页面标题",
      dataIndex: "title",
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
      title: "选择页面模板",
      dataIndex: "tem",
      valueType: "select",
      formItemProps: {
        rules: [
          {
            required: true,
            message: "此项为必填项",
          },
        ],
      },
      request: () => {
        return (
          getTemplateList({
            params: {
              pageSize: 999,
            },
            sort: {},
          }) as any as Promise<{
            data: {
              data: TemplateObject[];
            };
          }>
        ).then(({ data }) => {
          return data?.data?.map((item) => ({
            label: item.title,
            value: item.componentName,
          }));
        });
      },
    },
    {
      title: "页面路由",
      dataIndex: "router",
      fieldProps: {
        placeholder: "如果不填，默认将自动生成页面路由地址",
      },
    },
    {
      title: "页面描述",
      dataIndex: "desc",
      valueType: "textarea",
    },
  ],
  [
    {
      title: "选择数据源",
      dataIndex: "dataEffect",
      valueType: "formList",
      columns: [
        {
          title: "数据配置",
          valueType: "group",
          columns: [
            {
              title: "桥接",
              dataIndex: "implantation",
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
              title: "test2",
              dataIndex: "test2",
            },
          ],
        },
      ],
    },
  ],
  [],
];
