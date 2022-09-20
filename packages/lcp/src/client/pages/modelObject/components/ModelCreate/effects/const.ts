/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 15:47:49
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-19 16:44:29
 * @FilePath: /todoweb/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/components/ModelCreate/effects/const.ts
 * @Description: update here
 */

import { ProFormColumnsType } from "@ant-design/pro-components";
import { MODEL_TYPE_CONFIG_LIST } from "../../../../../../api/const";
import { getEnum } from "../../../../../utils";
import { ALL_MODEL_FIELD_LIST } from "./../../../lib";

export const INIT_MODEL_CREATE_FORM_COLUMNS: ProFormColumnsType<
  Record<string, any>,
  "text"
>[][] = [
  [
    {
      title: "模型名称",
      tooltip:
        "模型名称对应库表名称，应以大写的字母开头，大驼峰式英语单词拼接,例: StudentObject",
      dataIndex: "name",
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
      title: "模型标题",
      dataIndex: "title",
      tooltip: "模型的中文标题，例如: 学生对象模型",
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
      title: "选择模型类型",
      dataIndex: "type",
      valueType: "select",
      formItemProps: {
        rules: [
          {
            required: true,
            message: "此项为必填项",
          },
        ],
      },
      valueEnum: getEnum(MODEL_TYPE_CONFIG_LIST),
    },
    {
      title: "模型描述",
      dataIndex: "desc",
      valueType: "textarea",
    },
  ],
  [
    {
      title: "模型字段定义",
      dataIndex: "fields",
      valueType: "formList",
      formItemProps: {
        rules: [
          {
            required: true,
            message: "此项为必填项",
          },
        ],
      },
      columns: [
        {
          title: "--字段配置--",
          valueType: "group",
          columns: [
            {
              title: "字段名称",
              dataIndex: "fieldName",
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
              title: "字段类型",
              dataIndex: "type",
              valueEnum: getEnum(ALL_MODEL_FIELD_LIST),
              formItemProps: {
                rules: [
                  {
                    required: true,
                    message: "此项为必填项",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
  [],
];
