/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-14 17:39:46
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-23 17:01:23
 * @FilePath: /@bui/bui-pro/src/SPTable/components/SPTableBase/effect/useSearchProp.ts
 * @Description: update here
 */

import type { UseSearchProp } from './type';

export const useSearchProp: UseSearchProp = ({ search }) => {
  return (
    search ?? {
      labelWidth: 'auto',
    }
  );
};
