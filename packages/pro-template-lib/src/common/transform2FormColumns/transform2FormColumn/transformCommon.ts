/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-27 16:05:46
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-27 18:52:54
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/transform2FormColumns/transform2FormColumn/transformCommon.ts
 * @Description: update here
 */

import { ProFormColumnsType } from '@ant-design/pro-components';
import { Transform2FormColumn } from './type';

export const transformCommon: Transform2FormColumn = ({ field }) => {
  const { title, type, fieldName, config } = field;
  const { commonSetup } = config || {};
  const { desc, isRequired, isEditable } = commonSetup || {};
  const result: ProFormColumnsType<Record<string, any>, 'text'> = {
    valueType: type,
    title,
    dataIndex: fieldName,
    width: '300px',
    tooltip: desc || undefined,
  };
  if (isRequired) {
    result.formItemProps = {
      rules: [
        {
          required: true,
        },
      ],
    };
  }
  if (!isEditable) {
    result.editable = false;
  }
  return result;
};
