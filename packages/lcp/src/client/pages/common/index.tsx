/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-28 19:25:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-01-31 16:39:12
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/common/index.tsx
 * @Description: update here
 */
import React, { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Layout, Menu } from "antd";

import styles from "./index.module.less";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useMenuData } from "./effects";

const { Header, Sider, Content, Footer } = Layout;

export const CommonObject = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { menuData } = useMenuData();
  const { model } = useParams();
  return (
    <Layout className={styles["app-wrap"]}>
      <Header className={styles["flex-wrap"]}>
        <div className={styles["flex-wrap"]}>
          <div className={styles["logo"]} />
          <h3 className={styles["logo-text"]}>六弦低代码</h3>
        </div>

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
        <QuestionCircleOutlined
          className={styles["ques-icon"]}
          style={{ color: "#fff" }}
        />
      </Header>
      <Layout className={styles["catalogue-wrap"]}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            style={{ height: "100%" }}
            mode="inline"
            selectedKeys={[model]}
            items={menuData}
            onClick={(item) => {
              // setSelectedKeys(item.key);
              navigate(`/common/${item.key}/record/list`);
            }}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: "#fff",
            }}
          >
            {collapsed ? (
              <MenuUnfoldOutlined
                className={styles["trigger"]}
                onClick={() => setCollapsed(!collapsed)}
              />
            ) : (
              <MenuFoldOutlined
                className={styles["trigger"]}
                onClick={() => setCollapsed(!collapsed)}
              />
            )}
          </Header>
          <Content
            style={{
              padding: 24,
              paddingBottom: 0,
              minHeight: 280,
              overflowY: "scroll",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Footer className={styles["footer-wrap"]}>
        六弦低代码平台-维护人@六弦
      </Footer>
    </Layout>
  );
};

export default () => <CommonObject />;
