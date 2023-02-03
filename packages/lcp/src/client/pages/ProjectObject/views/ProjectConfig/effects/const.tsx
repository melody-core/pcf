/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-02-02 16:28:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-03 10:28:41
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/ProjectConfig/effects/const.tsx
 * @Description: update here
 */

import {
  ClusterOutlined,
  FilePptOutlined,
  MenuUnfoldOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React from "react";

export const PROJECT_CONFIG_MENU_LIST = [
  {
    label: "应用菜单配置",
    key: "menuConfig",
    icon: <MenuUnfoldOutlined />,
  },
  {
    label: "业务活动编排",
    disabled: true,
    key: "activeConfig",
    icon: <ClusterOutlined />,
  },
  {
    label: "自定义页面配置",
    key: "pageConfig",
    icon: <FilePptOutlined />,
  },
  {
    label: "用户权限配置",
    key: "jurisdiction",
    disabled: true,
    icon: <UsergroupAddOutlined />,
  },
];
