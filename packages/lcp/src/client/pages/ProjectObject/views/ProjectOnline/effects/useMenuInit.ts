/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-11-05 19:54:54
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-11-05 21:50:09
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/ProjectOnline/effects/useMenuInit.ts
 * @Description: update here
 */

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const getMenuDataFirstItemp = (tree = []) => {
  for (const node of tree) {
    if (!node?.children && node.key) {
      return node.key;
    }
    if (node.children?.length) {
      return getMenuDataFirstItemp(node.children);
    }
  }
};

export const getMenuDataDefaultOpen = (tree = [], list = []) => {
  for (const node of tree) {
    console.log(node?.key);
    if (node.key?.includes("GROUP_MENU")) {
      list.push(node.key);
    }
    if (node.children?.length) {
      getMenuDataDefaultOpen(node.children, list);
    }
  }
  return list;
};

export const useMenuInit = ({ MenuTreeData, project }) => {
  const locationX = useLocation();
  const navigate = useNavigate();
  const initPath = locationX?.pathname?.replace(`/pro/${project}`, "");
  useEffect(() => {
    console.log("project:", project);
    if (!project) {
      return;
    }
    console.log("MenuTreeData?", MenuTreeData);
    const firstPath = getMenuDataFirstItemp(MenuTreeData || []);
    console.log("firstPath:", firstPath);
    if (firstPath && firstPath !== initPath) {
      navigate(`/pro/${project}${firstPath}`);
    }
  }, [MenuTreeData]);
  const defaultKeys = getMenuDataDefaultOpen(MenuTreeData || [], []);
  return {
    initPath,
    defaultKeys,
  };
};
