/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-10 22:52:01
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-10 22:52:02
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/transform2TableColumns/transform2TableColumn/transformDate.ts
 * @Description: update here
 */
import { transformCommon } from './transformCommon';
import { Transform2TableColumn } from './type';

export const transformDate: Transform2TableColumn = ({ field }) => {
  const result = transformCommon({ field });
  // const { config } = field || {};
  // const { individualizedSetup } = config || {};
  return result;
};
