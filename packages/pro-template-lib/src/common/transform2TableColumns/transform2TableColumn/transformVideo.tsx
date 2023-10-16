/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-14 19:26:42
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-17 02:12:14
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/transform2TableColumns/transform2TableColumn/transformVideo.tsx
 * @Description: update here
 */
import { VideoFieldRead } from '../../components';
import { transformCommon } from './transformCommon';
import { Transform2TableColumn } from './type';

export const transformVideo: Transform2TableColumn = ({ field }) => {
  const result = transformCommon({ field });
  const { fieldName } = field || {};
  // const { individualizedSetup } = config || {};
  result.render = (_, record) => {
    return <VideoFieldRead value={record[fieldName]} renderType="table" />;
  };
  result.search = false;
  return result;
};
