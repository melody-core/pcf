/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-28 17:43:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 17:44:49
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/components/NormalCreateForm/type.ts
 * @Description: update here
 */

import { ModelConfig } from './../../common/components/CommonNormalForm/effects/type';

export interface NormalCreateFormProps {
  modelConfig: ModelConfig;
  actionConfig: Record<string, any>;
}
