/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-28 18:52:35
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-02 12:43:44
 * @FilePath: /melodyLCP/packages/lcp/src/client/store/pageObject.ts
 * @Description: update here
 */
import { makeAutoObservable } from "mobx";
import { PROJECT_MENU_CONFIG } from "../pages/ProjectObject/effect";

const getURLParams: (props: {
  key: string;
  isNumber?: boolean;
  defaultValue?: any;
}) => string = ({ key, isNumber = false, defaultValue }) => {
  const searchParams = new window.URLSearchParams(location.search);
  let res;
  searchParams.forEach((v, k) => {
    if (k === key) {
      res = isNumber ? +v : v;
    }
  });
  return res || defaultValue;
};

export class ErrorObjectStoreConstructor {
  pageObject = {
    // 选择的Project
    selectedKeys: [
      (
        PROJECT_MENU_CONFIG.find((item) =>
          location.pathname.match(item.value)
        ) || PROJECT_MENU_CONFIG[0]
      ).value,
    ],
  };
  setSelectedKeys = (key) => {
    this.pageObject = {
      ...this.pageObject,
      selectedKeys: [key],
    };
    // TODO sth
  };

  constructor() {
    makeAutoObservable(this);
  }
}

export default new ErrorObjectStoreConstructor();
