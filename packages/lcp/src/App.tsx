/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-06 16:46:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2024-02-28 13:13:46
 * @FilePath: /melodyLCP/packages/lcp/src/App.tsx
 * @Description: update here
 */
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, Avatar } from "antd";
import NavConfig from "./client/config/nav.config";
import { observer } from "mobx-react";
import globalStore from "./client/store/global";

import styles from "./index.module.less";
import { DocLinkIcon } from "./client/components";
import {
  updateAdminUser,
  findAdminUsers,
  // createAdminUser,
  loginAdminUser,
} from "./api/login";
import { xFetch } from "./client/utils";
import UserIcon from "./client/components/UserIcon";
const { Header, Footer } = Layout;

// findAdminUsers().then(console.log);

// createAdminUser({
//   username: "admin",
//   password: "xiaotijiang666",
//   level: 9,
// }).then(() => findAdminUsers().then(console.log));

const App = observer(
  ({
    store: {
      globalObject: { selectedMenuItem, userinfo },
      setSelectedKey,
      setUserinfo,
    },
  }) => {
    const navigate = useNavigate();
    useEffect(() => {
      const params = new URLSearchParams({
        callback: globalThis.location.href,
      });
      const cookie = localStorage.getItem("cookie");
      if (!cookie) {
        navigate(`/login?${params.toString()}`);
        return;
      }
      xFetch(
        loginAdminUser({
          cookie,
        })
      )
        .then((result) => {
          const { success, data } = result;
          if (success) {
            setUserinfo(data?.userinfo);
            localStorage.setItem("cookie", cookie);
          } else {
            navigate(`/login?${params.toString()}`);
            return;
          }
        })
        .catch(() => {
          navigate(`/login?${params.toString()}`);
          return;
        });
    }, []);
    return (
      <Layout className={styles["app-wrap"]}>
        <Header className={styles["flex-wrap"]}>
          <div className={styles["flex-wrap"]}>
            <div className={styles["logo"]} />
            <h3 className={styles["logo-text"]}>六弦应用组装-体验版</h3>
          </div>

          <Menu
            className={styles["flex-1"]}
            theme="dark"
            mode="horizontal"
            selectedKeys={[selectedMenuItem]}
            items={userinfo?.level === 9 ? NavConfig : NavConfig.slice(0, 2)}
            onClick={({ key }) => {
              navigate(NavConfig.find((item) => item.key === key)?.to);
              setSelectedKey(key);
            }}
          />
          <UserIcon />
          <DocLinkIcon />
        </Header>
        <Outlet />
        <Footer className={styles["footer-wrap"]}>小梯匠应用组装平台</Footer>
      </Layout>
    );
  }
);

export default () => <App store={globalStore} />;
