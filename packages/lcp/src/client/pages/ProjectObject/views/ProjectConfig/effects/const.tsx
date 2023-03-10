/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-02-02 16:28:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-03-09 17:20:57
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/ProjectConfig/effects/const.tsx
 * @Description: update here
 */

import {
  ApartmentOutlined,
  ClusterOutlined,
  BellOutlined,
  HomeOutlined,
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
    key: "activeConfig",
    icon: <ClusterOutlined />,
    children: [
      {
        label: "活动对象管理",
        icon: <ApartmentOutlined />,
        disabled: true,
        key: "activeManager",
      },
    ],
  },
  {
    label: "用户权限配置",
    key: "jurisdiction",
    disabled: true,
    icon: <UsergroupAddOutlined />,
  },
  {
    label: "应用入口配置",
    key: "homeConfig",
    disabled: true,
    icon: <HomeOutlined />,
  },
  {
    label: "任务调度配置",
    key: "taskConfig",
    disabled: true,
    icon: <BellOutlined />,
  },
];
