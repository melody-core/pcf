import { ProColumns } from '@ant-design/pro-components';
import { Transform2TableColumn } from './type';

/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 02:03:06
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 02:19:19
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/transform2TableColumns/transform2TableColumn/transformDigit.ts
 * @Description: update here
 */
export const transformDigit: Transform2TableColumn = ({ field }) => {
  const { title, type, fieldName, config } = field;
  const { commonSetup, individualizedSetup } = config || {};
  const { desc } = commonSetup || {};
  const { minValue, maxValue } = individualizedSetup || {};
  const result: ProColumns<Record<string, any>, 'text'> = {
    valueType: type,
    title,
    dataIndex: fieldName,
    fieldProps: {
      min: minValue,
      max: maxValue,
    },
    tooltip: desc || undefined,
  };
  return result;
};
