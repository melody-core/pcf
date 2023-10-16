/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 00:21:44
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-16 23:33:42
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/transform2FormColumns/transform2FormColumn/type.ts
 * @Description: update here
 */

import {
  ProFormColumnsType,
  ProFormInstance,
} from '@ant-design/pro-components';
import { FieldSingleMeta, MetaDataResponse } from '../../../sevice/type';
import { MutableRefObject } from 'react';

export interface Transform2FormColumnParams {
  field: FieldSingleMeta;
  formRef?: MutableRefObject<ProFormInstance<Record<string, any>> | undefined>;
  metaData: MetaDataResponse;
}

export interface Transform2FormColumn {
  (o: Transform2FormColumnParams): ProFormColumnsType<
    Record<string, any>,
    'text'
  >;
}
