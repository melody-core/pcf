/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 20:28:51
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-16 23:33:09
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/transform2FormColumns/index.ts
 * @Description: update here
 */

import {
  ProFormColumnsType,
  ProFormInstance,
} from '@ant-design/pro-components';
import { FieldSingleMeta, MetaDataResponse } from '../../sevice/type';
import {
  transformDigit,
  transformText,
  transformSelect,
  transformDate,
  transformImage,
  transformVideo,
  transformTable,
} from './transform2FormColumn';
import { Transform2FormColumn } from './transform2FormColumn/type';
import { MutableRefObject } from 'react';

export const TRANSFORM_FORM_COLUMN_MAP = new Map<string, Transform2FormColumn>()
  .set('text', transformText)
  .set('select', transformSelect)
  .set('date', transformDate)
  .set('image', transformImage)
  .set('video', transformVideo)
  .set('table', transformTable)
  .set('digit', transformDigit);

export const transform2FormColumns = (
  fields: FieldSingleMeta[],
  formRef: MutableRefObject<ProFormInstance<Record<string, any>> | undefined>,
  metaData: MetaDataResponse
): ProFormColumnsType<Record<string, any>, 'text'>[] => {
  return fields.map((field) => {
    const { type, title, fieldName } = field;
    let targetTransformFn = TRANSFORM_FORM_COLUMN_MAP.get(type || 'text');
    if (targetTransformFn) {
      return targetTransformFn({
        field,
        formRef,
        metaData,
      });
    }
    return {
      title,
      dataIndex: fieldName,
    };
  });
};
