/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-06 16:46:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 20:44:28
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
import { createProject, findAdminUsers, loginAdminUser } from "./api/login";
import { xFetch } from "./client/utils";
import UserIcon from "./client/components/UserIcon";
const { Header, Footer } = Layout;

// findAdminUsers().then(console.log);

// createProject({
//   username: "admin",
//   password: "xiaotijiang666",
//   phone: "18210711176",
// });

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
      const cookie = localStorage.getItem("cookie");
      if (!cookie) {
        navigate("/login");
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
            navigate("/login");
            return;
          }
        })
        .catch(() => {
          navigate("/login");
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
            items={NavConfig}
            onClick={({ key }) => {
              navigate(NavConfig.find((item) => item.key === key)?.to);
              setSelectedKey(key);
            }}
          />
          <UserIcon />
          <DocLinkIcon />
        </Header>
        <Outlet />
        <Footer className={styles["footer-wrap"]}>
          六弦应用组装平台-体验版@六弦(钉钉:melodyWxy)
        </Footer>
      </Layout>
    );
  }
);

export default () => <App store={globalStore} />;
