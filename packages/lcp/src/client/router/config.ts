/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-28 16:00:11
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-05 18:03:30
 * @FilePath: /melodyLCP/packages/lcp/src/client/router/config.ts
 * @Description: update here
 */

import App from "../../App";
import Page404 from "../pages/Status/404";
import { NavItems } from "./../config/nav.config";
import { PAGE_MENU_KEYS } from "./../pages/pageObject/effect";

// 页面管理 - start
import PageManager from "../pages/pageObject";
import PageList from "../pages/pageObject/components/PageList";
import TemplateList from "../pages/pageObject/components/TemplateList";
import PageCreate from "../pages/pageObject/components/PageCreate";

export default [
  {
    path: "/",
    Component: App,
    children: [
      {
        path: NavItems[0].key,
        Component: PageManager,
        bread: ["六弦低代码系统", "页面管理"],
        children: [
          {
            path: "",
            Component: PageList,
            bread: ["六弦低代码系统", "页面管理", "页面列表"],
          },
          {
            path: PAGE_MENU_KEYS.PAGE_LIST,
            Component: PageList,
            bread: ["六弦低代码系统", "页面管理", "页面列表"],
          },
          {
            path: PAGE_MENU_KEYS.TEMPLATE_LIST,
            Component: TemplateList,
            bread: ["六弦低代码系统", "页面管理", "模板列表"],
          },
          {
            path: PAGE_MENU_KEYS.PAGE_CREATE,
            Component: PageCreate,
            bread: ["六弦低代码系统", "页面管理", "创建页面"],
          },
        ],
      },
      {
        path: "",
        Component: PageManager,
        bread: ["六弦低代码系统", "页面管理"],
        children: [
          {
            path: "",
            Component: PageList,
            bread: ["六弦低代码系统", "页面管理", "页面列表"],
          },
        ],
      },
      {
        path: "*",
        Component: Page404,
      },
    ],
  },
];
