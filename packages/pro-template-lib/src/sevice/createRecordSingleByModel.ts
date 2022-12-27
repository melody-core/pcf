/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 20:47:55
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 20:49:34
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/sevice/createRecordSingleByModel.ts
 * @Description: update here
 */
import { xPost } from '../utils/xPost';

export const createRecordSingleByModel = ({
  modelName,
  data,
}: {
  modelName: string;
  data: Record<string, any>;
}) => {
  return xPost<any>(`/api/common/${modelName}/createSingle`, data);
};
