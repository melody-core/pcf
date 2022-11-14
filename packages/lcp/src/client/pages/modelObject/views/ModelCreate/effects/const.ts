/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 15:47:49
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 17:34:21
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/views/ModelCreate/effects/const.ts
 * @Description: update here
 */

import { ProFormColumnsType } from "@ant-design/pro-components";
import { MODEL_TYPE_CONFIG_LIST } from "../../../../../../api/const";
import { getEnum } from "../../../../../utils";
import { ALL_MODEL_FIELD_LIST } from "../../../lib";
import styles from "./../index.module.less";

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

export const WHETHER_OPTIONS = [
  {
    label: "是",
    value: 1,
  },
  {
    label: "否",
    value: 0,
  },
];

export const INIT_MODEL_CREATE_FORM_COLUMNS: ProFormColumnsType<
  Record<string, any>,
  "modelSetup" | "xSelect"
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
          // title: "--字段配置--",
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
              title: "字段名称",
              dataIndex: "fieldName",
              tooltip: "字段名称是唯一的, 模型字段与库表字段是一一对应的。",
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
              title: "是否必须",
              dataIndex: "isRequired",
              valueType: "radio",
              fieldProps: {
                options: WHETHER_OPTIONS,
                defaultValue: WHETHER_OPTIONS[1].value,
              },
            },
            {
              title: "是否唯一",
              dataIndex: "isUnique",
              valueType: "radio",
              fieldProps: {
                options: WHETHER_OPTIONS,
                defaultValue: WHETHER_OPTIONS[1].value,
              },
            },
            {
              valueType: "dependency",
              name: ["type"],
              columns: (...args) => {
                return [
                  {
                    title: "设置",
                    dataIndex: "setup",
                    valueType: "modelSetup",
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
