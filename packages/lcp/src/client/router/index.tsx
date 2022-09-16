/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-28 15:21:09
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-05 14:36:42
 * @FilePath: /melodyLCP/packages/lcp/src/client/router/index.tsx
 * @Description: update here
 */
import React from "react";
import { Routes, Route } from "react-router-dom";
import config from "./config";

export const renderRouterList = (routerConfigs) => {
  if (!Array.isArray(routerConfigs)) {
    return;
  }
  return routerConfigs.map((item) => {
    const { path, Component, children, ...pageInfo } = item;
    let childRouters;
    if (children) {
      childRouters = renderRouterList(children);
    }
    return (
      <Route path={path} key={path} element={<Component pageInfo={pageInfo} />}>
        {childRouters}
      </Route>
    );
  });
};

const RouterViews = () => <Routes>{renderRouterList(config)}</Routes>;

export default RouterViews;
