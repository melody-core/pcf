/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 00:21:44
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 20:45:18
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/transform2FormColumns/transform2FormColumn/type.ts
 * @Description: update here
 */

import { ProFormColumnsType } from '@ant-design/pro-components';
import { FieldSingleMeta } from '../../../sevice/type';

export interface Transform2FormColumnParams {
  field: FieldSingleMeta;
}

export interface Transform2FormColumn {
  (o: Transform2FormColumnParams): ProFormColumnsType<
    Record<string, any>,
    'text'
  >;
}
