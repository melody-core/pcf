/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-28 16:00:11
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-01-28 17:23:39
 * @FilePath: /melodyLCP/packages/lcp/src/client/router/config.ts
 * @Description: update here
 */

import App from "../../App";
import NotOpen from "../pages/Status/NotOpen";
import { NavItems } from "./../config/nav.config";
import { PAGE_MENU_KEYS } from "../pages/PageObject/effect";
import { MODEL_MENU_KEYS } from "./../pages/modelObject/effect";

// 页面管理 - start
import PageManager from "../pages/PageObject";
import Demo from "../pages/demo";
import { PageList, TemplateList, PageCreate } from "../pages/PageObject/views";
// 页面管理 - end

// 模型管理 - start
import ModelManager from "../pages/modelObject";
import {
  ModelList,
  ModelCreate,
  ModelEdit,
} from "./../pages/modelObject/views";
// 模型管理 - end
// base-页面管理 - start
import {
  CommonCreate,
  CommonDetail,
  CommonEdit,
  CommonFilterTable,
} from "../pages/common/Views";
import { CommonObject } from "../pages/common";
// base-页面管理 - end

export default [
  {
    path: "common",
    Component: CommonObject,
    children: [
      {
        path: ":model/record/create",
        Component: CommonCreate,
        bread: ["六弦低代码系统", "创建记录"],
      },
      {
        path: ":model/record/detail",
        Component: CommonDetail,
        bread: ["六弦低代码系统", "记录详情"],
      },
      {
        path: ":model/record/edit",
        Component: CommonEdit,
        bread: ["六弦低代码系统", "编辑记录"],
      },
      {
        path: ":model/record/list",
        Component: CommonFilterTable,
        bread: ["六弦低代码系统", "记录列表"],
      },
    ],
  },
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
          {
            path: MODEL_MENU_KEYS.MODEL_EDIT,
            Component: ModelEdit,
            bread: ["六弦低代码系统", "模型管理", "编辑模型"],
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
