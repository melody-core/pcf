/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 00:21:44
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 02:00:31
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/transform2TableColumns/transform2TableColumn/type.ts
 * @Description: update here
 */

import { ProColumns } from '@ant-design/pro-components';
import { FieldSingleMeta } from '../../../sevice/type';

export interface Transform2TableColumnParams {
  field: FieldSingleMeta;
}

export interface Transform2TableColumn {
  (o: Transform2TableColumnParams): ProColumns<Record<string, any>, 'text'>;
}
