/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-28 17:43:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 18:55:18
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/components/NormalDetailForm/type.ts
 * @Description: update here
 */

import { ModelConfig } from '../../common/components/CommonNormalForm/effects/type';

export interface NormalDetailFormProps {
  modelConfig: ModelConfig;
  actionConfig: Record<string, any>;
}
