/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-28 17:42:04
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-03 10:45:28
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/projectObject/index.tsx
 * @Description: update here
 */

import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { observer } from "mobx-react";

import pageObjectStore from "../../store/pageObject";
import { Outlet, useNavigate } from "react-router-dom";

import styles from "./index.module.css";
import { PROJECT_MENU_CONFIG, useInitMenuSelected } from "./effect";
import { useProject } from "./commonHooks";

const { Header, Sider, Content } = Layout;

export const ProjectObject = observer(
  ({
    store: {
      pageObject: { selectedKeys },
      setSelectedKeys,
    },
  }) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    useInitMenuSelected({ setSelectedKeys });
    return (
      <Layout className={styles["catalogue-wrap"]}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            style={{ height: "100%" }}
            mode="inline"
            selectedKeys={selectedKeys}
            items={PROJECT_MENU_CONFIG}
            onClick={(item) => {
              setSelectedKeys(item.key);
              navigate(`/project_lc/${item.key}`);
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
    );
  }
);

export default () => <ProjectObject store={pageObjectStore} />;
