/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-06 16:46:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-19 13:58:46
 * @FilePath: /todoweb/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/App.tsx
 * @Description: update here
 */
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import NavConfig from "./client/config/nav.config";
// import UserIcon from "./client/components/UserIcon";

import "antd/dist/antd.css";
import "./index.css";

import styles from "./index.module.css";

const { Header, Footer } = Layout;

const App = () => {
  const navigate = useNavigate();
  return (
    <Layout className="app-wrap">
      <Header className={styles["flex-wrap"]}>
        <div className={styles["logo"]} />
        <Menu
          className={styles["flex-1"]}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[NavConfig[0].key]}
          items={NavConfig}
          onClick={({ key }) => {
            navigate(NavConfig.find((item) => item.key === key)?.to);
          }}
        />
        {/* <UserIcon /> */}
      </Header>
      <Outlet />
      <Footer className={styles["footer-wrap"]}>
        六弦低代码平台-维护人@六弦
      </Footer>
    </Layout>
  );
};

export default App;
