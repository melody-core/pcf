/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-19 13:51:52
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-19 13:58:11
 * @FilePath: /todoweb/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/store/global.ts
 * @Description: update here
 */
import { makeAutoObservable } from "mobx";
import { PAGE_MENU_CONFIG } from "../pages/pageObject/effect";
import { MODEL_MENU_CONFIG } from "../pages/modelObject/effect";
import NavConfig from "../config/nav.config";

export class GlobalStoreConstructor {
  globalObject = {
    // top菜单选项
    selectedMenuItem: NavConfig[0].to,
    // 选择的左侧菜单
    selectedKeys: [
      (
        MODEL_MENU_CONFIG.find((item) => location.pathname.match(item.value)) ||
        MODEL_MENU_CONFIG[0]
      ).value,
    ],
    // 当前详情
    errorObjectList: [],
  };
  setSelectedKeys = (key) => {
    this.globalObject = {
      ...this.globalObject,
      selectedKeys: [key],
    };
    // TODO sth
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new GlobalStoreConstructor();
