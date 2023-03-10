/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 00:19:16
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 12:49:05
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/transform2TableColumns/index.ts
 * @Description: update here
 */

import { ProColumns } from '@ant-design/pro-components';
import { FieldSingleMeta } from '../../sevice/type';
import {
  transformDigit,
  transformText,
  transformSelect,
} from './transform2TableColumn';
import { Transform2TableColumn } from './transform2TableColumn/type';

export const TRANSFORM_TABLE_COLUMN_MAP = new Map<
  string,
  Transform2TableColumn
>()
  .set('text', transformText)
  .set('select', transformSelect)
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
