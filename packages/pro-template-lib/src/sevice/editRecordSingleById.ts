/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-28 19:02:13
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 19:11:45
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/sevice/editRecordSingleById.ts
 * @Description: update here
 */

import { xPost } from '../utils/xPost';

export const editRecordSingleById = ({
  modelName,
  _id,
  data,
}: {
  modelName: string;
  _id: string;
  data: Record<string, any>;
}) => {
  return xPost<any>(`/api/common/${modelName}/editSingleById`, {
    _id,
    data,
  });
};
