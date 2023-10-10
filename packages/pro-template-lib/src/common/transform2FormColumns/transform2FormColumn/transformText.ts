/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 00:20:49
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-10 22:51:32
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/transform2FormColumns/transform2FormColumn/transformText.ts
 * @Description: update here
 */

import { transformCommon } from './transformCommon';
import { Transform2FormColumn } from './type';

export const transformText: Transform2FormColumn = ({ field }) => {
  const result = transformCommon({ field });
  const { config } = field || {};
  const { individualizedSetup } = config || {};
  const { defaultValue, maxLength } = individualizedSetup || {};
  result.fieldProps = {
    defaultValue: defaultValue || '',
    maxLength: maxLength,
  };
  return result;
};
