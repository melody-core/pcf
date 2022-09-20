/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-14 17:40:25
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-14 17:50:10
 * @FilePath: /@bui/bui-pro/src/SPTable/ui/SPTableBase/effect/usePaginationProp.ts
 * @Description: update here
 */

import type { UsePaginationProp } from './type';

export const usePaginationProp: UsePaginationProp = ({ pagination }) => {
  return pagination ?? {};
};
