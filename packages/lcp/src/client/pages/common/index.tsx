/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-28 19:25:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-01-28 17:18:01
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/common/index.tsx
 * @Description: update here
 */
/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-06 16:46:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-23 23:57:39
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/App.tsx
 * @Description: update here
 */
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";

import styles from "./index.module.css";

const { Header, Footer } = Layout;

export const CommonObject = () => {
  const navigate = useNavigate();
  return (
    <Layout className="app-wrap">
      <Header className={styles["flex-wrap"]}>
        <div className={styles["logo"]} />
        <Menu
          className={styles["flex-1"]}
          theme="dark"
          mode="horizontal"
          // selectedKeys={}
          items={[]}
          onClick={({ key }) => {
            // navigate(NavConfig.find((item) => item.key === key)?.to);
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

export default () => <CommonObject />;
