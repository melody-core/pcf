/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 00:20:49
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 02:17:56
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/transform2TableColumns/transform2TableColumn/transformText.ts
 * @Description: update here
 */

import { ProColumns } from '@ant-design/pro-components';
import { Transform2TableColumn } from './type';

export const transformText: Transform2TableColumn = ({ field }) => {
  const { title, type, fieldName, config } = field;
  const { commonSetup, individualizedSetup } = config || {};
  const { desc } = commonSetup || {};
  const { defaultValue, maxLength } = individualizedSetup || {};
  const result: ProColumns<Record<string, any>, 'text'> = {
    valueType: type,
    title,
    dataIndex: fieldName,
    fieldProps: {
      defaultValue: defaultValue || '',
      maxLength: maxLength,
    },
    ellipsis: true,
    tooltip: desc || undefined,
  };
  return result;
};
