import { ProFormColumnsType } from "@ant-design/pro-components";

export const TABLE_EFFECT_COLUMN: (
  o: any
) => ProFormColumnsType<Record<string, any>, "text">[] = ({ formMapRef }) => {
  console.log("formValues:", formMapRef);
  const modelFormData = formMapRef?.current?.[1]?.current?.getFieldsValue();
  const { fields = [] } = modelFormData || {};
  console.log("modelFormData:", modelFormData);
  return [
    {
      dataIndex: "linkTableFields",
      valueType: "select",
      title: "关联动态表头来源",
      tooltip: "非必填,创建时如果不填此字段值,则落库为默认值",
      fieldProps: {
        showSearch: true,
        allowClear: true,
        mode: "multiple",
        options: fields
          .filter((target) => {
            const { config, type } = target || {};
            return (
              type === "select" &&
              config?.individualizedSetup?.isMultiple === true
            );
          })
          .map((field) => ({
            label: field.title,
            value: field.fieldName,
          })),
      },
    },
    {
      valueType: "formList",
      title: "自定义固定表头属性",
      dataIndex: "enumTableFields",
      columns: [
        {
          valueType: "group",
          columns: [
            {
              dataIndex: "title",
              valueType: "text",
              title: "属性名",
            },
            {
              title: "对应key值",
              dataIndex: "key",
              valueType: "text",
            },
            {
              title: "字段类型",
              dataIndex: "valueType",
              valueType: "select",
              fieldProps: {
                options: [
                  {
                    label: "文本",
                    value: "input",
                  },
                  {
                    label: "数字",
                    value: "digit",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    // {
    //   dataIndex: "minLength",
    //   title: "最小长度",
    //   fieldProps: {
    //     placeholder: 0,
    //   },
    //   valueType: "digit",
    //   tooltip: "非必填,将会检查字段值长度是否不小于给定的数字,默认为0",
    // },
    // {
    //   dataIndex: "maxLength",
    //   title: "最大长度",
    //   valueType: "digit",
    //   tooltip: "非必填,将会检查字段值长度是否不大于给定的数字",
    // },
  ];
};
