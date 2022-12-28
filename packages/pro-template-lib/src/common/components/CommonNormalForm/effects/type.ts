/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 20:14:31
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 19:00:03
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/components/CommonNormalForm/effects/type.ts
 * @Description: update here
 */
import { ProFormInstance } from '@ant-design/pro-components';
import { MutableRefObject } from 'react';
import { MetaDataResponse } from '../../../../sevice/type';

export interface ModelConfig {
  mainModel: string;
}

export interface UseMetaDataParams {
  modelConfig: ModelConfig;
}

export interface UseColumnsPropParams {
  modelMetaData: MetaDataResponse | null;
  viewType: 'detail' | 'edit' | 'create';
}

export interface UseSubmitParams {
  modelConfig: ModelConfig;
  viewType: 'detail' | 'edit' | 'create';
}

export interface UseInitValueParams {
  formRef: MutableRefObject<ProFormInstance<Record<string, any>> | undefined>;
  viewType: 'detail' | 'edit' | 'create';
  modelConfig: ModelConfig;
}
