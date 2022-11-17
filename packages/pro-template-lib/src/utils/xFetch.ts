/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-11 09:51:56
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-17 16:34:21
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/utils/xFetch.ts
 * @Description: update here
 */

import { message } from 'antd';

export const xFetch = async <T>(
  p: Promise<T>
): Promise<{
  success: boolean;
  data: T;
  msg?: string;
  code: number;
}> => {
  let result;
  try {
    result = await p;
  } catch (error) {
    message.error(`服务异常!`);
    console.error('error:', error);
    return {
      success: false,
      msg: '',
      code: 500,
      data: null as any,
    };
  }
  const { success = false, msg, code, data } = (result || {}) as any;
  if (!success) {
    console.error('result:', result);
    message.error(msg || '接口异常!');
  }
  return {
    success,
    msg,
    code,
    data,
  };
};
