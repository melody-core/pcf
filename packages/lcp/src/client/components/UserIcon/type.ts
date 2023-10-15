/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-06 15:22:03
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 15:03:33
 * @FilePath: /melodyLCP/packages/lcp/src/client/components/UserIcon/type.ts
 * @Description: update here
 */

import globalStore from "./../../store/global";

export type GlobalStore = typeof globalStore;

export interface UserIconProps {
  store: GlobalStore;
}
