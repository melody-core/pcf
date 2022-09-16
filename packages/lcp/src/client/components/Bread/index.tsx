/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-05-28 20:23:42
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-05-28 22:01:01
 * @FilePath: /hooks-app/src/client/components/Bread/index.tsx
 * @Description: update here
 */
import React, { FC } from "react";
import { Breadcrumb } from "antd";
import { BreadProps } from "./type";

const { Item } = Breadcrumb;

export const Bread: FC<BreadProps> = ({ lvs }) => {
  const items = lvs.map((lvStr, lvIndex) => <Item key={lvIndex}>{lvStr}</Item>);
  return (
    <Breadcrumb
      style={{
        margin: "12px 0",
      }}
    >
      {items}
    </Breadcrumb>
  );
};

export default Bread;
