/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-11 09:51:56
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 01:02:11
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/utils/xPost.ts
 * @Description: update here
 */

import { message } from 'antd';

export const xPost = <T>(
  url: RequestInfo | URL,
  body?: Record<string, any>
): Promise<{
  success: boolean;
  data: T;
  msg?: string;
  code: number;
}> => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      args: [body || {}],
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      const { success = false, msg } = (result || {}) as any;
      if (!success) {
        console.error('result:', result);
        message.error(msg || '接口异常!');
        return result;
      }
      return result;
    })
    .catch((error: any) => {
      message.error(`服务异常!`);
      console.error('error:', error);
      return {
        success: false,
        msg: '',
        code: 500,
        data: null as any,
      };
    });
};
