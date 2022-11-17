import { ProFormColumnsType } from "@ant-design/pro-components";
import { NORMAL_RADIO_GROUP_IS, SELECT_SOURCE_OPTIONS } from "./const";

export const SELECT_EFFECT_COLUMN: ProFormColumnsType<
  Record<string, any>,
  "text"
>[] = [
  {
    title: "是否支持多选",
    dataIndex: "isMultiple",
    valueType: "radio",
    tooltip: "是否为多选字段",
    fieldProps: {
      options: NORMAL_RADIO_GROUP_IS,
      defaultValue: NORMAL_RADIO_GROUP_IS[1].value,
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
    name: ["selectType"],
    columns: ({ selectType }) => {
      if (selectType === SELECT_SOURCE_OPTIONS[0].value) {
        return [
          {
            valueType: "formList",
            dataIndex: "enumOptions",
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
        ];
      }
      return [];
    },
  },
];
