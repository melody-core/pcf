/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-28 16:00:11
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-19 11:57:30
 * @FilePath: /todoweb/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/router/config.ts
 * @Description: update here
 */

import App from "../../App";
import Page404 from "../pages/Status/404";
import NotOpen from "../pages/Status/NotOpen";
import { NavItems } from "./../config/nav.config";
import { PAGE_MENU_KEYS } from "./../pages/pageObject/effect";
import { MODEL_MENU_KEYS } from "./../pages/modelObject/effect";

// 页面管理 - start
import PageManager from "../pages/pageObject";
import Demo from "../pages/demo";
import PageList from "../pages/pageObject/components/PageList";
import TemplateList from "../pages/pageObject/components/TemplateList";
import PageCreate from "../pages/pageObject/components/PageCreate";
// 页面管理 - end

// 模型管理 - start
import ModelManager from "../pages/modelObject";
import ModelList from "../pages/modelObject/components/ModelList";
import ModelCreate from "../pages/modelObject/components/ModelCreate";
// 模型管理 - end

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
        path: NavItems[1].key,
        Component: ModelManager,
        bread: ["六弦低代码系统", "模型管理"],
        children: [
          {
            path: "",
            Component: ModelList,
            bread: ["六弦低代码系统", "模型管理", "模型列表"],
          },
          {
            path: MODEL_MENU_KEYS.MODEL_LIST,
            Component: ModelList,
            bread: ["六弦低代码系统", "模型管理", "模型列表"],
          },
          {
            path: MODEL_MENU_KEYS.MODEL_CREATE,
            Component: ModelCreate,
            bread: ["六弦低代码系统", "模型管理", "创建模型"],
          },
        ],
      },
      {
        path: "demo",
        Component: Demo,
        bread: ["六弦低代码系统", "模型管理"],
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
        Component: NotOpen,
      },
    ],
  },
];
