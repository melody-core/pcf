/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-10 22:52:12
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-11 00:48:56
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/transform2TableColumns/transform2TableColumn/transformImage.tsx
 * @Description: update here
 */

import { ImageFieldRead } from '../../components';
import { transformCommon } from './transformCommon';
import { Transform2TableColumn } from './type';

export const transformImage: Transform2TableColumn = ({ field }) => {
  const result = transformCommon({ field });
  const { fieldName } = field || {};
  // const { individualizedSetup } = config || {};
  result.render = (_, record) => {
    return <ImageFieldRead value={record[fieldName]} renderType="table" />;
  };
  return result;
};
