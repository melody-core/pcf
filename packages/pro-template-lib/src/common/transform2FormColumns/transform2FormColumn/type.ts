/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 00:21:44
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 20:12:55
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/transform2FormColumns/transform2FormColumn/type.ts
 * @Description: update here
 */

import {
  ProFormColumnsType,
  ProFormInstance,
} from '@ant-design/pro-components';
import { FieldSingleMeta } from '../../../sevice/type';
import { MutableRefObject } from 'react';

export interface Transform2FormColumnParams {
  field: FieldSingleMeta;
  formRef?: MutableRefObject<ProFormInstance<Record<string, any>> | undefined>;
}

export interface Transform2FormColumn {
  (o: Transform2FormColumnParams): ProFormColumnsType<
    Record<string, any>,
    'text'
  >;
}
