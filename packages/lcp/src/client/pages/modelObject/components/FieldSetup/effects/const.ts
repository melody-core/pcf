/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-10-05 01:21:47
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-10-05 01:33:32
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/components/FieldSetup/effects/const.ts
 * @Description: update here
 */

import { ProFormColumnsType } from "@ant-design/pro-components";

export const MODEL_FIELD_COLUMNS: ProFormColumnsType<
  Record<string, any>,
  "modelSetup"
>[] = [
  {
    title: "是否可编辑",
    tooltip:
      "模型字段即为库表字段，有些业务场景下的业务数据，对应的字段自创建后即不可变更的。",
    dataIndex: "editable",
    valueType: "radio",
    fieldProps: {
      options: [
        {
          label: "是",
          value: 0,
        },
        {
          label: "否",
          value: 1,
        },
      ],
    },
  },
];
