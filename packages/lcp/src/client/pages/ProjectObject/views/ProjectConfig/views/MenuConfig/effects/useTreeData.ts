/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-02-02 22:45:35
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-02 23:48:43
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/ProjectConfig/views/MenuConfig/effects/useTreeData.ts
 * @Description: update here
 */

import { useState } from "react";

export const useTreeData = ({ cuMenuNodeRef }) => {
  const [treeData, setTreeData] = useState([]);
  const [expandedKeys, setExpandedKeys] = useState([]);
  const addNode = (node) => {
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

    setTreeData([...treeData]);
  };

  const updateNode = (node) => {
    if (cuMenuNodeRef.current) {
      Object.assign(cuMenuNodeRef.current, node);
    }
    setTreeData([...treeData]);
  };

  return {
    treeData,
    addNode,
    expandedKeys,
    updateNode,
    setExpandedKeys,
  };
};
