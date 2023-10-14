/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 20:28:51
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-14 16:55:14
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/transform2FormColumns/index.ts
 * @Description: update here
 */

import { ProFormColumnsType } from '@ant-design/pro-components';
import { FieldSingleMeta } from '../../sevice/type';
import {
  transformDigit,
  transformText,
  transformSelect,
  transformDate,
  transformImage,
  transformVideo,
} from './transform2FormColumn';
import { Transform2FormColumn } from './transform2FormColumn/type';

export const TRANSFORM_FORM_COLUMN_MAP = new Map<string, Transform2FormColumn>()
  .set('text', transformText)
  .set('select', transformSelect)
  .set('date', transformDate)
  .set('image', transformImage)
  .set('video', transformVideo)
  .set('digit', transformDigit);

export const transform2FormColumns = (
  fields: FieldSingleMeta[]
): ProFormColumnsType<Record<string, any>, 'text'>[] => {
  return fields.map((field) => {
    const { type, title, fieldName } = field;
    let targetTransformFn = TRANSFORM_FORM_COLUMN_MAP.get(type || 'text');
    if (targetTransformFn) {
      return targetTransformFn({
        field,
      });
    }
    return {
      title,
      dataIndex: fieldName,
    };
  });
};
