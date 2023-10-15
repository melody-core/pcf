/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-02-02 16:43:24
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 22:22:52
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/ProjectConfig/views/MenuConfig/index.tsx
 * @Description: update here
 */

import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Alert, Button, Card, Tooltip, Tree } from "antd";
import React from "react";
import { BetaSchemaForm } from "@ant-design/pro-components";
import Bread from "../../../../../../components/Bread";

import styles from "./index.module.less";
import { useParams } from "react-router-dom";
import { CREATE_MENU_ITEM_SCHEMA } from "./effects/const";
import { useShowModalForm, useTreeData } from "./effects";
import { useProject } from "../../../../commonHooks";

export const MenuConfig = () => {
  const { project } = useParams();
  const { projectData } = useProject({ name: project });
  const { showModal, cuMenuNodeRef, modalTypeRef, modalContrulor } =
    useShowModalForm();
  const {
    treeData,
    addNode,
    updateNode,
    expandedKeys,
    setExpandedKeys,
    deleteNode,
    onDrop,
  } = useTreeData({
    cuMenuNodeRef,
    projectData,
  });
  return (
    <div className={styles["menu-config-wrap"]}>
      <div className={styles["title_wrap"]}>
        <Bread lvs={["应用管理", projectData?.title || project, "菜单管理"]} />
        <Tooltip title="菜单节点可拖拽排序; 鼠标悬浮到节点上，可进行编辑、删除以及子节点添加操作。">
          <QuestionCircleOutlined
            style={{ marginLeft: "8px" }}
            className={styles["ques-icon"]}
          />
        </Tooltip>
      </div>
      <Card className={styles["card-wrap"]}>
        <Button type="primary" onClick={() => modalContrulor({ isShow: true })}>
          创建一级菜单
        </Button>
        <div className={styles["card-content-tree-wrap"]}>
          {treeData?.length ? (
            <Tree
              showLine
              fieldNames={{
                title: "label",
                key: "key",
                children: "children",
              }}
              expandedKeys={expandedKeys}
              onExpand={(cuExpandedKeys) => {
                setExpandedKeys(cuExpandedKeys);
              }}
              draggable
              titleRender={(node) => (
                <div className={styles["menu-node-wrap"]}>
                  <div className={styles["menu-node-text"]}>{node.label}</div>
                  <div className={styles["menu-icon-group"]}>
                    <Tooltip title="添加子菜单项">
                      <PlusCircleOutlined
                        onClick={() =>
                          modalContrulor({ isShow: true, cuMenuNode: node })
                        }
                        className={styles["menu-icon"]}
                      />
                    </Tooltip>
                    <Tooltip title="编辑此菜单项">
                      <EditOutlined
                        onClick={() =>
                          modalContrulor({
                            isShow: true,
                            cuMenuNode: node,
                            modalType: "edit",
                          })
                        }
                        className={styles["menu-icon"]}
                      />
                    </Tooltip>
                    <Tooltip title="删除此菜单项">
                      <DeleteOutlined
                        className={styles["menu-icon"]}
                        onClick={() => deleteNode(node)}
                      />
                    </Tooltip>
                  </div>
                </div>
              )}
              onDrop={onDrop}
              treeData={treeData}
            />
          ) : (
            <Alert
              message="暂无菜单配置，请进行配置"
              description="点击上方按钮，创建一级菜单！"
              type="info"
            />
          )}
        </div>
      </Card>
      {showModal && (
        <BetaSchemaForm
          title={modalTypeRef.current === "add" ? "新增菜单项" : "编辑菜单项"}
          visible={true}
          layoutType="ModalForm"
          columns={CREATE_MENU_ITEM_SCHEMA({
            project,
          })}
          initialValues={
            modalTypeRef.current === "edit"
              ? {
                  ...(cuMenuNodeRef.current || {}),
                }
              : {}
          }
          modalProps={{
            onCancel: () => modalContrulor({ isShow: false }),
          }}
          onFinish={async (v) => {
            if (modalTypeRef.current === "add") {
              addNode({
                ...v,
                key: v.key || `GROUP_MENU_${("" + Date.now()).substring(6)}`,
              });
            } else {
              updateNode(v);
            }
            modalContrulor({ isShow: false });
          }}
        />
      )}
    </div>
  );
};
