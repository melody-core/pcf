/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-07 17:15:14
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-10 13:37:52
 * @FilePath: /bui-local/Users/wxy/codeWorks/sp-pub/gg-plugin-server/hooks-app/src/client/components/UserIcon/effect.ts
 * @Description: update here
 */



import { useEffect } from "react";

// import { login } from "../../../api/user";


export const useLogin = (isLogin) => {
  useEffect(()=>{
    // if(!isLogin){
    //   login({
    //     name: '小明',
    //     password: 'xxxxy'
    //   })  
    //     .then(res=>{
    //       console.log('res', res);
    //     })
    //     .catch(console.error)
    // }
  }, [])
}