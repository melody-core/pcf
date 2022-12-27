/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 20:14:31
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 20:57:20
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/components/CommonNormalForm/effects/type.ts
 * @Description: update here
 */
import { MetaDataResponse } from '../../../../sevice/type';

export interface ModelConfig {
  mainModel: string;
}

export interface UseMetaDataParams {
  modelConfig: ModelConfig;
}

export interface UseColumnsPropParams {
  modelMetaData: MetaDataResponse | null;
}

export interface UseSubmitParams {
  modelConfig: ModelConfig;
}
