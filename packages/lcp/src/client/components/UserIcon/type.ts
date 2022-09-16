/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-06 15:22:03
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-06 16:04:29
 * @FilePath: /hooks-app/src/client/components/UserIcon/type.ts
 * @Description: update here
 */


import userStore from './../../store/user';

export type UserStore = typeof userStore;


export interface UserIconProps{
  store: UserStore
}