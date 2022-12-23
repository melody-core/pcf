/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 15:47:49
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 03:45:33
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/pageObject/views/PageCreate/effects/const.ts
 * @Description: update here
 */

import { ProFormColumnsType } from "@ant-design/pro-components";
// import { TemplateObject } from "@prisma/client";
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
              data: any[];
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
      title: "所属项目",
      dataIndex: "router",
      fieldProps: {
        placeholder: "如果未选择，则为公共资源页面",
      },
    },
    {
      title: "页面描述",
      dataIndex: "desc",
      valueType: "textarea",
    },
  ],
  [
    // {
    //   title: "选择数据源",
    //   valueType: "dependency",
    //   name: ["tem"],
    // },
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
