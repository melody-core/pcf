/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 20:28:51
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 20:45:08
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/transform2FormColumns/index.ts
 * @Description: update here
 */

import { ProFormColumnsType } from '@ant-design/pro-components';
import { FieldSingleMeta } from '../../sevice/type';
import {
  transformDigit,
  transformText,
  transformSelect,
} from './transform2FormColumn';
import { Transform2FormColumn } from './transform2FormColumn/type';

export const TRANSFORM_FORM_COLUMN_MAP = new Map<string, Transform2FormColumn>()
  .set('text', transformText)
  .set('select', transformSelect)
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
