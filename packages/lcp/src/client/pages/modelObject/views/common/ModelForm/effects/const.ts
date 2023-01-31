/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 15:47:49
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-01-31 11:08:45
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/effects/const.ts
 * @Description: update here
 */

import { ProFormColumnsType } from "@ant-design/pro-components";
// import { MODEL_TYPE_CONFIG_LIST } from "../../../../../../../api/const";
// import { getEnum } from "../../../../../../utils";
import { ALL_MODEL_FIELD_LIST } from "../../../../lib";
// import styles from "./../index.module.less";

export enum MODEL_VIEW_TYPES {
  CREATE = "CREATE",
  DETAIL = "DETAIL",
  EDIT = "EDIT",
}

export const LOCAL_STORE_CREATE_MODEL = "LOCAL_STORE_CREATE_MODEL";

export const MODEL_NAME_REG = /^[A-Z][a-zA-Z]+$/;

export const MODEL_FORM_CREATE_STEPS = [
  {
    title: "模型基本配置",
  },
  {
    title: "模型字段配置",
  },
  {
    title: "模型高级配置",
  },
];

export const INIT_MODEL_CREATE_FORM_COLUMNS: ProFormColumnsType<
  Record<string, any>,
  "xSelect" | "modelFieldConfigSetup"
>[][] = [
  [
    {
      dataIndex: "dataType",
      title: "模型数据类型",
      tooltip:
        "主体数据即构成业务的主体，比如在音乐培训学校场景中，音乐培训是一个业务流程，是由老师、学生等主体进行活动构成的，能进行或参与业务活动的即为主体数据，如学生、老师、产品等, 而基础数据类型指可枚举的数据，例如课程分类: 架子鼓、吉他、钢琴, 业务数据比如课程订单,是由主体数据学生进行事务活动形成的数据。",
      valueType: "radioButton",
      fieldProps: {
        defaultValue: "business",
        options: [
          {
            label: "业务数据类型",
            value: "business",
          },
          {
            label: "主体数据",
            value: "mainBody",
          },
          {
            label: "基础数据类型",
            value: "basics",
          },
        ],
      },
      formItemProps: {
        required: true,
      },
    },
    {
      title: "模型名称",
      tooltip:
        "模型名称对应库表名称，应以大写的字母开头，大驼峰式英语单词拼接,例: StudentObject",
      dataIndex: "name",
      formItemProps: {
        rules: [
          {
            required: true,
            validator(rule, value, callback) {
              if (!value) {
                return Promise.reject("模型名称为必填项");
              }
              if (!MODEL_NAME_REG.test(value)) {
                return Promise.reject(
                  "模型名称为首字母为大写的全英文名称(大驼峰式命名)"
                );
              }
              return Promise.resolve();
            },
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
      title: "模型描述",
      dataIndex: "desc",
      valueType: "textarea",
    },
  ],
  [
    {
      title: "模型字段定义",
      dataIndex: "fields",
      key: "fields",
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
          valueType: "group",
          formItemProps: {
            rules: [
              {
                validator(rule, value, callback) {
                  if (!value?.length) {
                    return Promise.reject("模型至少含有一个字段！");
                  }
                  const names = value.map((field) => field.fieldName);
                  const realNames = Array.from(
                    new Set(names.filter((name) => name))
                  );
                  const isDuplicate = realNames.length === names.length;
                  if (!isDuplicate) {
                    return Promise.reject("字段名称不能重复！");
                  }
                  return Promise.resolve();
                },
              },
            ],
          },
          columns: [
            {
              title: "字段key",
              dataIndex: "fieldName",
              tooltip: "字段key是唯一的,本质上,它是库表的字段名。",
              formItemProps: {
                rules: [
                  {
                    validator(rule, value) {
                      if (!value) {
                        return Promise.reject("字段名不能为空");
                      }
                      const isStandard = /[a-z]/.test(value[0]);
                      if (!isStandard) {
                        return Promise.reject("必须以首字母小写开头");
                      }
                      return Promise.resolve();
                    },
                  },
                ],
              },
            },
            {
              title: "字段含义名称",
              dataIndex: "title",
              formItemProps: {
                rules: [
                  {
                    required: true,
                    message: "此项为必填项",
                  },
                ],
              },
              tooltip:
                "给字段一个名称便于使用，例如key设为name,含义名称为‘姓名’",
            },
            {
              title: "字段类型",
              dataIndex: "type",
              valueType: "xSelect",
              // valueEnum: getEnum(ALL_MODEL_FIELD_LIST),
              fieldProps: {
                options: ALL_MODEL_FIELD_LIST,
                style: {
                  minWidth: "135px",
                },
              },
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
              valueType: "dependency",
              name: ["type"],
              columns: ({ type }) => {
                return [
                  {
                    title: "配置",
                    dataIndex: "config",
                    valueType: "modelFieldConfigSetup",
                    fieldProps: {
                      fieldType: type,
                    },
                  },
                ];
              },
            },
          ],
        },
      ],
    },
  ],
  [],
];
