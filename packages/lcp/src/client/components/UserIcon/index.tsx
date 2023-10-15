/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-06 15:21:55
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 15:07:29
 * @FilePath: /melodyLCP/packages/lcp/src/client/components/UserIcon/index.tsx
 * @Description: update here
 */

import React, { FC } from "react";
import { Dropdown, Menu, Button, Avatar, message } from "antd";
import { observer } from "mobx-react";
// import { Link } from 'react-router-dom'
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import globalStore from "./../../store/global";

import type { UserIconProps } from "./type";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

export const UserIcon: FC<UserIconProps> = observer(
  ({
    store: {
      globalObject: { userinfo },
    },
  }) => {
    const { username, headerImgUrl } = userinfo || {};
    const navigate = useNavigate();
    return (
      <div className={styles["user-icon-wrap"]}>
        <Dropdown
          overlay={
            <Menu
              items={[
                {
                  label: "用户中心",
                  key: "1",
                  icon: <UserOutlined />,
                  disabled: true,
                },
                {
                  label: "用户设置",
                  key: "2",
                  icon: <SettingOutlined />,
                  disabled: true,
                },
                {
                  label: "退出登录",
                  key: "3",
                  danger: true,
                  icon: <LogoutOutlined />,
                  onClick: () => {
                    localStorage.removeItem("cookie");
                    navigate("/login");
                  },
                },
              ]}
            />
          }
        >
          <Button ghost style={{ border: "none" }}>
            <Avatar size="small" icon={<UserOutlined />} src={headerImgUrl} />
            <span className={styles["user-name"]}>{username}</span>
          </Button>
        </Dropdown>
      </div>
    );
  }
);

export default () => <UserIcon store={globalStore} />;
