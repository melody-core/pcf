/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-02-03 13:37:42
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-03 13:44:21
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/ProjectOnline/effects/getMenuData.ts
 * @Description: update here
 */

export const getMenuData = (tree) => {
  tree.forEach((node) => {
    if (!node.key.includes("/GROUP_MENU")) {
      if (!node.children?.length) {
        delete node.children;
      }
    }
    if (node.children?.length) {
      getMenuData(node.children);
    }
  });
};
