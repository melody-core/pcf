/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-28 18:41:32
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 18:44:20
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/sevice/getRecordDetailById.ts
 * @Description: update here
 */
import { xPost } from '../utils/xPost';

export const getRecordDetailById = ({
  modelName,
  _id,
}: {
  modelName: string;
  _id: string;
}) => {
  return xPost<any>(`/api/common/${modelName}/getDetailById`, {
    _id,
  });
};
