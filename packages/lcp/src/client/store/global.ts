/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-19 13:51:52
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 14:21:53
 * @FilePath: /melodyLCP/packages/lcp/src/client/store/global.ts
 * @Description: update here
 */
import { makeAutoObservable } from "mobx";
// import { PAGE_MENU_CONFIG } from "../pages/ProjectObject/effect";
import { MODEL_MENU_CONFIG } from "../pages/modelObject/effect";
import NavConfig from "../config/nav.config";

export class GlobalStoreConstructor {
  globalObject = {
    // top菜单选项
    selectedMenuItem: (
      NavConfig.find((item) => location.pathname.match(item.to)) || NavConfig[0]
    ).key,
    userinfo: null,
  };

  setSelectedKey = (key) => {
    this.globalObject = {
      ...this.globalObject,
      selectedMenuItem: key,
    };
    // TODO sth
  };
  setUserinfo = (userinfo) => {
    this.globalObject = {
      ...this.globalObject,
      userinfo,
    };
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new GlobalStoreConstructor();
