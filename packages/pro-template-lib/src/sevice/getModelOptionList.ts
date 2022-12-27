/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 03:20:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-27 15:58:05
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/sevice/getModelOptionList.ts
 * @Description: update here
 */

import { xPost } from '../utils/xPost';
import { MetaDataResponse } from './type';

export const getModelOptionList = async () => {
  const res = await xPost<{
    total: number;
    data: MetaDataResponse[];
  }>('/api/modelConfig/getList', {
    params: {
      pageSize: 999,
    },
    sort: {},
  });
  const { success, data } = res;
  if (success) {
    return data?.data?.map((item) => ({
      label: item.title,
      value: item.name,
    }));
  }
  return [];
};
