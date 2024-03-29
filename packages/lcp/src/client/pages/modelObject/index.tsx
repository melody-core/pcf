/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-16 16:16:07
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-11-05 22:50:28
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/index.tsx
 * @Description: update here
 */

import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { observer } from "mobx-react";

import modelObjectStore from "../../store/modelObject";
import { Outlet, useNavigate } from "react-router-dom";
import { MODEL_MENU_CONFIG, useInitMenuSelected } from "./effect";
import globalStore from "../../store/global";

import styles from "./index.module.css";

const { Header, Sider, Content } = Layout;

export const ModelObject = observer(
  ({
    store: {
      modelObject: { selectedKeys },
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
            defaultOpenKeys={[MODEL_MENU_CONFIG[0].value]}
            selectedKeys={selectedKeys}
            items={MODEL_MENU_CONFIG}
            onClick={(item) => {
              setSelectedKeys(item.key);
              navigate(`/model_lc/${item.key}`);
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

export default () => <ModelObject store={modelObjectStore} />;
