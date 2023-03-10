/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-06 16:46:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-02 16:59:17
 * @FilePath: /melodyLCP/packages/lcp/src/App.tsx
 * @Description: update here
 */
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import NavConfig from "./client/config/nav.config";
import { observer } from "mobx-react";
import globalStore from "./client/store/global";

import styles from "./index.module.less";
import { DocLinkIcon } from "./client/components";

const { Header, Footer } = Layout;

const App = observer(
  ({
    store: {
      globalObject: { selectedMenuItem },
      setSelectedKey,
    },
  }) => {
    const navigate = useNavigate();
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
          {/* <UserIcon /> */}
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
