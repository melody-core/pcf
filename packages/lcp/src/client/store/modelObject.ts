/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-16 16:17:25
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-19 10:12:57
 * @FilePath: /todoweb/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/store/modelObject.ts
 * @Description: update here
 */
import { makeAutoObservable } from "mobx";
import { MODEL_MENU_CONFIG } from "../pages/modelObject/effect";

export class ModelObjectStoreConstructor {
  modelObject = {
    // 选择的Project
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
    this.modelObject = {
      ...this.modelObject,
      selectedKeys: [key],
    };
    // TODO sth
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new ModelObjectStoreConstructor();
