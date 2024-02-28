/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-02-03 11:35:37
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2024-02-28 20:10:49
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/ProjectOnline/index.tsx
 * @Description: update here
 */

import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Layout, Menu } from "antd";

import styles from "./index.module.less";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
// import { PROJECT_CONFIG_MENU_LIST } from "./effects/const";
import { DocLinkIcon } from "../../../../components";
import { useProject } from "../../commonHooks";
import { getMenuData, useMenuInit } from "./effects";
import { observer } from "mobx-react";
import globalStore from "../../../../store/global";
import { xFetch } from "../../../../utils";
import { loginAdminUser } from "../../../../../api/login";

const { Header, Sider, Content, Footer } = Layout;

const ProjectOnlineBase = observer(
  ({
    global: {
      globalObject: { userinfo },
      setUserinfo,
    },
  }) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const { project } = useParams();
    const { projectData } = useProject({ name: project });
    getMenuData(projectData?.menuConfig?.data || []);
    const { initPath, defaultKeys } = useMenuInit({
      MenuTreeData: projectData?.menuConfig?.data,
      project,
    });

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

    useEffect(() => {
      console.log("userinfo:", userinfo);
      if (userinfo?.level <= 3 && userinfo?.pros) {
        if (!userinfo?.pros?.includes(projectData._id)) {
          navigate("/");
        }
      }
    }, [projectData, userinfo]);
    // const cuSelectKeys = [
    //   (
    //     PROJECT_CONFIG_MENU_LIST.find((item) =>
    //       location.pathname.includes(item.key)
    //     ) || PROJECT_CONFIG_MENU_LIST[0]
    //   ).key,
    // ];
    console.log("defaultKeys", defaultKeys);
    return (
      <Layout className={styles["app-wrap"]}>
        <Header className={styles["flex-wrap"]}>
          <div className={styles["flex-wrap"]}>
            <div className={styles["logo"]} />
            <h3 className={styles["logo-text"]}>
              {projectData?.title || project}
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
              key={initPath + defaultKeys?.length}
              defaultOpenKeys={defaultKeys}
              selectedKeys={[initPath]}
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
  }
);
export const ProjectOnline = () => <ProjectOnlineBase global={globalStore} />;
