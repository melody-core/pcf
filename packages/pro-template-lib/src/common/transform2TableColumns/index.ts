/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 00:19:16
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-14 19:29:22
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/transform2TableColumns/index.ts
 * @Description: update here
 */

import { ProColumns } from '@ant-design/pro-components';
import { FieldSingleMeta } from '../../sevice/type';
import {
  transformDigit,
  transformText,
  transformSelect,
  transformDate,
  transformImage,
  transformVideo,
} from './transform2TableColumn';
import { Transform2TableColumn } from './transform2TableColumn/type';

export const TRANSFORM_TABLE_COLUMN_MAP = new Map<
  string,
  Transform2TableColumn
>()
  .set('text', transformText)
  .set('select', transformSelect)
  .set('date', transformDate)
  .set('video', transformVideo)
  .set('image', transformImage)
  .set('digit', transformDigit);

export const transform2TableColumns = (
  fields: FieldSingleMeta[]
): ProColumns<Record<string, any>, 'text'>[] => {
  return fields.map((field) => {
    const { type, title, fieldName } = field;
    let targetTransformFn = TRANSFORM_TABLE_COLUMN_MAP.get(type || 'text');
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
