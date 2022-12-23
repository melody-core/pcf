/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 02:51:25
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 03:10:17
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/sevice/deleteRecordById.ts
 * @Description: update here
 */
import { xPost } from '../utils/xPost';

export const deleteRecordById = ({
  modelName,
  _id,
}: {
  modelName: string;
  _id: string;
}) => {
  return xPost<any>(
    `http://localhost:3000/api/common/${modelName}/deleteSingleById`,
    {
      _id,
    }
  );
};
