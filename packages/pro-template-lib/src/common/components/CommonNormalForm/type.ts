/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-28 18:07:04
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 18:08:32
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/components/CommonNormalForm/type.ts
 * @Description: update here
 */

import { ModelConfig } from './effects/type';

export interface CommonNormalFormProps {
  viewType: 'detail' | 'edit' | 'create';
  modelConfig: ModelConfig;
  actionConfig: Record<string, any>;
}
