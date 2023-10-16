/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 01:10:43
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-17 01:31:17
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/components/NormalFilterTableList/effects/type.ts
 * @Description: update here
 */

import { ParamsType } from '@ant-design/pro-components';
import { SortOrder } from 'antd/lib/table/interface';
import { MetaDataResponse } from '../../../sevice/type';

export interface ModelConfig {
  mainModel: string;
}

export interface UseMetaDataParams {
  modelConfig: ModelConfig;
}

export interface UseColumnsPropParams {
  modelMetaData: MetaDataResponse | null;
}
export interface UseExpandedParams {
  modelMetaData: MetaDataResponse | null;
}

export type RequestFn = (
  params: ParamsType & {
    pageSize?: number | undefined;
    current?: number | undefined;
    keyword?: string | undefined;
  },
  sort: Record<string, SortOrder>,
  filter: Record<string, any>
) => Promise<{
  data: Record<string, any>[];
  success: boolean;
  total: number;
}>;
export interface UseRequestPropParams {}
