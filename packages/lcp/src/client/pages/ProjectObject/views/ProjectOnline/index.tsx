/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-02-03 11:35:37
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-03 13:52:54
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/ProjectOnline/index.tsx
 * @Description: update here
 */

import React, { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Layout, Menu } from "antd";

import styles from "./index.module.less";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
// import { PROJECT_CONFIG_MENU_LIST } from "./effects/const";
import { DocLinkIcon } from "../../../../components";
import { useProject } from "../../commonHooks";
import { getMenuData } from "./effects";

const { Header, Sider, Content, Footer } = Layout;

export const ProjectOnline = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const { project } = useParams();
  const { projectData } = useProject({ name: project });
  getMenuData(projectData?.menuConfig?.data || []);

  // const cuSelectKeys = [
  //   (
  //     PROJECT_CONFIG_MENU_LIST.find((item) =>
  //       location.pathname.includes(item.key)
  //     ) || PROJECT_CONFIG_MENU_LIST[0]
  //   ).key,
  // ];
  return (
    <Layout className={styles["app-wrap"]}>
      <Header className={styles["flex-wrap"]}>
        <div className={styles["flex-wrap"]}>
          <div className={styles["logo"]} />
          <h3 className={styles["logo-text"]}>
            {projectData?.title || project}(体验版)
          </h3>
        </div>
        <Menu
          className={styles["flex-1"]}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[]}
          items={[]}
        />
        {/* <UserIcon /> */}
        <DocLinkIcon />
      </Header>
      <Layout className={styles["catalogue-wrap"]}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            style={{ height: "100%" }}
            mode="inline"
            // selectedKeys={cuSelectKeys}
            items={projectData?.menuConfig?.data || []}
            onClick={(item) => {
              navigate(`/pro/${project}${item.key}`);
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
        六弦应用组装平台-维护人@六弦
      </Footer>
    </Layout>
  );
};
