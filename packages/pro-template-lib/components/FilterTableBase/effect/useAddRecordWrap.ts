/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-17 15:22:07
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-19 23:33:53
 * @FilePath: /@bui/bui-pro/src/SPTable/components/SPTableBase/effect/useAddRecordWrap.ts
 * @Description: update here
 */

import { useState } from 'react';
import type { UseAddRecordWrap } from './type';

export const useAddRecordWrap: UseAddRecordWrap = () => {
  const [addRecordWrapVisible, setAddRecordWrap] = useState<boolean>(false);
  return {
    addRecordWrapVisible,
    setAddRecordWrap,
  };
};
