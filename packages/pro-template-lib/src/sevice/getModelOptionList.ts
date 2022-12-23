/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 03:20:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 03:27:12
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/sevice/getModelOptionList.ts
 * @Description: update here
 */

import { xPost } from '../utils/xPost';
import { MetaDataResponse } from './type';

export const getModelOptionList = () => {
  return xPost<{
    total: number;
    data: MetaDataResponse[];
  }>('http://localhost:3000/api/modelConfig/getList', {
    params: {},
    sort: {},
  }).then((res) => {
    const { success, data } = res;
    if (success) {
      return data?.data?.map((item) => ({
        label: item.title,
        value: item.name,
      }));
    }
    return [];
  });
};
