/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-23 19:39:30
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 15:44:46
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldConfigSetup/effects/libs/SELECT_EFFECT_COLUMN.tsx
 * @Description: update here
 */
import { ProFormColumnsType } from "@ant-design/pro-components";
import {
  getModelByName,
  getModelList,
} from "../../../../../../../../../../api/modelApi";
import { xFetch } from "../../../../../../../../../utils";
import { NORMAL_RADIO_GROUP_IS, SELECT_SOURCE_OPTIONS } from "./const";

export const SELECT_EFFECT_COLUMN: (
  o: any
) => ProFormColumnsType<Record<string, any>, "text">[] = ({ formValues }) => [
  {
    title: "是否支持多选",
    dataIndex: "isMultiple",
    valueType: "radio",
    tooltip: "是否为多选字段, 默认为不支持",
    fieldProps: {
      options: NORMAL_RADIO_GROUP_IS,
    },
  },
  {
    dataIndex: "selectType",
    title: "值选项来源类型",
    valueType: "radio",
    tooltip:
      "值选项来源类型, 枚举需要手动植入枚举选项，而关联的本质即为表关联，只需进行选择即可",
    fieldProps: {
      options: SELECT_SOURCE_OPTIONS,
    },
  },
  {
    valueType: "dependency",
    name: ["individualizedSetup"],
    columns: () => {
      const { individualizedSetup } = formValues.current || {};
      const { selectType, relationModel } = individualizedSetup || {};
      if (selectType === SELECT_SOURCE_OPTIONS[0].value) {
        return [
          {
            valueType: "formList",
            dataIndex: "enumOptions",
            columns: [
              {
                valueType: "group",
                columns: [
                  {
                    dataIndex: "label",
                    valueType: "text",
                    title: "标签名",
                  },
                  {
                    title: "值",
                    dataIndex: "value",
                    valueType: "text",
                  },
                ],
              },
            ],
          },
        ];
      }
      if (selectType === SELECT_SOURCE_OPTIONS[1].value) {
        return [
          {
            valueType: "select",
            title: "关联模型选择",
            dataIndex: "relationModel",
            fieldProps: {
              showSearch: true,
            },
            request: async () => {
              const result = await xFetch(
                getModelList({
                  params: {
                    pageSize: 999,
                  },
                  sort: {},
                })
              );
              const { success, data } = result;
              if (success) {
                return data?.data?.map((item) => ({
                  label: item.title,
                  value: item.name,
                }));
              }
            },
          },
          {
            valueType: "select",
            title: "关联显示字段",
            dataIndex: "relationShowField",
            params: { relationModel },
            request: async ({ relationModel }) => {
              if (!relationModel) {
                return [];
              }
              const result = await xFetch(
                getModelByName({
                  name: relationModel,
                })
              );
              const { success, data } = result;
              if (success) {
                return data?.fields?.map((field) => ({
                  label: field.title,
                  value: field.fieldName,
                }));
              }
            },
          },
        ];
      }
      return [];
    },
  },
];
