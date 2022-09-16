/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-28 17:01:02
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-10 17:27:53
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/gg-plugin-server/hooks-app/src/client/store/user.ts
 * @Description: update here
 */
import { observable } from "mobx"

class user{
  @observable userinfo: Record<any, any> = {
  };
  @observable isLogin = false
  // @action.bound
  // setCount(){
  //   this.count ++;
  // }
}

export default new user();