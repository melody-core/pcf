/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 01:33:07
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 02:53:01
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/components/NormalFilterTableList/effects/useRequestProp.ts
 * @Description: update here
 */

import { getRecordsByModel } from '../../../sevice';
import { RequestFn } from './type';

export const useRequestProp = () => {
  const mergeRequest: RequestFn = async (params = {}, sort, filter) => {
    const { mainModel, ...otherParams } = params;
    const result = await getRecordsByModel({
      modelName: mainModel,
      params: otherParams,
      sort,
    });
    const { success, data } = result;
    return {
      success,
      total: data?.total || 0,
      data: data?.data || [],
    };
  };
  return {
    mergeRequest,
  };
};
