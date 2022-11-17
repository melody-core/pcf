/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-15 17:37:25
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-17 17:52:51
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldSetup/const/TEXT_EFFECT_COLUMN.tsx
 * @Description: update here
 */

import { ProFormColumnsType } from "@ant-design/pro-components";

export const TEXT_EFFECT_COLUMN: ProFormColumnsType<
  Record<string, any>,
  "text"
>[] = [
  {
    dataIndex: "defaultValue",
    title: "默认值",
    tooltip: "创建时如果不填此字段值，则落库为默认值",
  },
];
