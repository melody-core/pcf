/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 03:12:57
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 03:15:55
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/type.ts
 * @Description: update here
 */

import { ProFormColumnsType } from '@ant-design/pro-components';

export interface PAGE_CONFIG {
  modelConfig: ProFormColumnsType<Record<string, any>, 'text'>[];
  actionConfig: ProFormColumnsType<Record<string, any>, 'text'>[];
}
