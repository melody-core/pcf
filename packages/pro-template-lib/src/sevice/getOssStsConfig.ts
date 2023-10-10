/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-10 22:54:36
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-10 22:54:37
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/sevice/getOssStsConfig.ts
 * @Description: update here
 */
import { xPost } from '../utils/xPost';

export const getOssStsConfig = () => {
  return xPost<any>('/api/oss/sts');
};
