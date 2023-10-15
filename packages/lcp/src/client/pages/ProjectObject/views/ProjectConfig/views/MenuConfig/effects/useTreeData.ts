/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-02-02 22:45:35
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 22:22:44
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/ProjectConfig/views/MenuConfig/effects/useTreeData.ts
 * @Description: update here
 */

import { message, Modal } from "antd";
import { DataNode, TreeProps } from "antd/lib/tree";
import { useEffect, useState } from "react";
import { updateProjectById } from "../../../../../../../../api/projectApi";
import { xFetch } from "../../../../../../../utils";

const loop = (
  data: DataNode[],
  key: React.Key,
  callback: (node: DataNode, i: number, data: DataNode[]) => void
) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].key === key) {
      return callback(data[i], i, data);
    }
    if (data[i].children) {
      loop(data[i].children!, key, callback);
    }
  }
};

const removeTreeNode = (tree, node) => {
  if (!Array.isArray(tree)) {
    return null;
  }
  for (let i = 0; i < tree.length; i++) {
    if (node === tree[i]) {
      tree.splice(i, 1);
      break;
    }
    removeTreeNode(tree[i].children, node);
  }
};

export const useTreeData = ({ cuMenuNodeRef, projectData }) => {
  const [treeData, setTreeData] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState([]);

  useEffect(() => {
    if (projectData?._id) {
      setTreeData(projectData?.menuConfig?.data || []);
    }
  }, [projectData?._id]);

  const addNode = async (node) => {
    if (cuMenuNodeRef.current) {
      cuMenuNodeRef.current.children = [
        ...(cuMenuNodeRef.current.children || []),
        node,
      ];
      if (!expandedKeys.includes(cuMenuNodeRef.current.key)) {
        expandedKeys.push(cuMenuNodeRef.current.key);
        setExpandedKeys([...expandedKeys]);
      }
    } else {
      treeData.push(node);
    }

    const result = await xFetch(
      updateProjectById({
        _id: projectData?._id,
        data: {
          ...projectData,
          menuConfig: {
            data: treeData,
          },
        },
      })
    );
    const { success } = result || {};
    if (success) {
      message.success("新建菜单项成功!");
      setTreeData([...treeData]);
    } else {
      message.error("新建菜单项失败!");
      window.location.reload();
    }
  };

  const updateNode = async (node) => {
    if (cuMenuNodeRef.current) {
      Object.assign(cuMenuNodeRef.current, node);
    }
    const result = await xFetch(
      updateProjectById({
        _id: projectData?._id,
        data: {
          ...projectData,
          menuConfig: {
            data: treeData,
          },
        },
      })
    );
    const { success } = result || {};
    if (success) {
      message.success("编辑菜单项成功!");
      setTreeData([...treeData]);
    } else {
      message.error("编辑菜单项失败!");
      window.location.reload();
    }
  };

  const onDrop: TreeProps["onDrop"] = (info) => {
    Modal.confirm({
      title: "确认操作",
      content: `确认将菜单${(info.dragNode as any).label}进行迁移吗`,
      onOk: async () => {
        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        const dropPos = info.node.pos.split("-");
        const dropPosition =
          info.dropPosition - Number(dropPos[dropPos.length - 1]);

        const data = [...treeData];
        // Find dragObject
        let dragObj: DataNode;
        loop(data, dragKey, (item, index, arr) => {
          arr.splice(index, 1);
          dragObj = item;
        });

        if (!info.dropToGap) {
          // Drop on the content
          loop(data, dropKey, (item) => {
            item.children = item.children || [];
            // where to insert 示例添加到头部，可以是随意位置
            item.children.unshift(dragObj);
          });
        } else if (
          ((info.node as any).props.children || []).length > 0 && // Has children
          (info.node as any).props.expanded && // Is expanded
          dropPosition === 1 // On the bottom gap
        ) {
          loop(data, dropKey, (item) => {
            item.children = item.children || [];
            // where to insert 示例添加到头部，可以是随意位置
            item.children.unshift(dragObj);
            // in previous version, we use item.children.push(dragObj) to insert the
            // item to the tail of the children
          });
        } else {
          let ar: DataNode[] = [];
          let i: number;
          loop(data, dropKey, (_item, index, arr) => {
            ar = arr;
            i = index;
          });
          if (dropPosition === -1) {
            ar.splice(i!, 0, dragObj!);
          } else {
            ar.splice(i! + 1, 0, dragObj!);
          }
        }
        const result = await xFetch(
          updateProjectById({
            _id: projectData?._id,
            data: {
              ...projectData,
              menuConfig: {
                data: treeData,
              },
            },
          })
        );
        const { success } = result || {};
        if (success) {
          message.success("迁移菜单项成功!");
          setTreeData(data);
        } else {
          message.error("迁移菜单项请求失败!");
          window.location.reload();
        }
      },
    });
  };

  const deleteNode = async (node) => {
    setTreeData((preTree) => {
      removeTreeNode(preTree, node);
      return [...(preTree || [])];
    });
  };
  return {
    treeData,
    addNode,
    expandedKeys,
    updateNode,
    setExpandedKeys,
    onDrop,
    deleteNode,
  };
};
