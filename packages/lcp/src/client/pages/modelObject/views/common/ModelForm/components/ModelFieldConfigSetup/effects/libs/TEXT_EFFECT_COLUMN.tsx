/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-23 19:39:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-10 22:40:57
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldConfigSetup/effects/libs/TEXT_EFFECT_COLUMN.tsx
 * @Description: update here
 */
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
    tooltip: "非必填,创建时如果不填此字段值,则落库为默认值",
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
  {
    dataIndex: "maxLength",
    title: "最大长度",
    valueType: "digit",
    tooltip: "非必填,将会检查字段值长度是否不大于给定的数字",
  },
];
