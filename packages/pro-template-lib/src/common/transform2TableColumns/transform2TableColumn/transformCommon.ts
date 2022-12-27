/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-27 16:12:31
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-27 16:12:31
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/transform2TableColumns/transform2TableColumn/transformCommon.ts
 * @Description: update here
 */
import { ProColumns } from '@ant-design/pro-components';
import { Transform2TableColumn } from './type';

export const transformCommon: Transform2TableColumn = ({ field }) => {
  const { title, type, fieldName, config } = field;
  const { commonSetup } = config || {};
  const { desc, isAllowedSearch } = commonSetup || {};
  const result: ProColumns<Record<string, any>, 'text'> = {
    valueType: type,
    title,
    dataIndex: fieldName,
    ellipsis: true,
    tooltip: desc || undefined,
  };
  if (!isAllowedSearch) {
    result.search = false;
  }
  return result;
};
