/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 00:47:52
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 20:25:32
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/sevice/getRecordsByModel.ts
 * @Description: update here
 */

import { xPost } from '../utils/xPost';

export const getRecordsByModel = ({
  modelName,
  params,
  sort,
}: {
  modelName: string;
  params: Record<string, any>;
  sort: Record<string, any>;
}) => {
  const orderBy: Record<string, any> = {};
  for (const key in sort) {
    orderBy[key] = sort[key] === 'ascend' ? 'asc' : 'desc';
  }

  return xPost<{
    data: Record<string, any>[];
    total: number;
  }>(`/api/common/${modelName}/getList`, {
    params,
    sort:
      Object.keys(orderBy).length > 0
        ? orderBy
        : {
            updatedAt: 'desc',
          },
  });
};
