import {
  GatewayOutlined,
  GoldOutlined,
  IdcardOutlined,
  TableOutlined,
} from "@ant-design/icons";
import React from "react";
import { useEffect, useState } from "react";
import { getModelList } from "../../../../api/modelApi";
import { xFetch } from "../../../utils";

const FETCH_CONFIG_LIST = [
  {
    dataType: "business",
    label: "业务数据类型",
    icon: <GatewayOutlined />,
  },
  {
    dataType: "mainBody",
    label: "主体数据",
    icon: <IdcardOutlined />,
  },
  {
    dataType: "basics",
    label: "基础数据类型",
    icon: <GoldOutlined />,
  },
];

export const useMenuData = () => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    const mData = [];
    Promise.all(
      FETCH_CONFIG_LIST.map((config) =>
        xFetch(
          getModelList({
            params: {
              pageSize: 999,
              dataType: config.dataType,
            },
            sort: {},
          })
        ).then((res) => {
          const { data } = res || {};
          const children = (data?.data || []).map((item) => ({
            label: item.title,
            key: item.name,
            icon: <TableOutlined />,
          }));
          mData.push({
            label: config.label,
            key: config.dataType,
            icon: config.icon,
            children,
          });
        })
      )
    ).then(() => {
      setMenuData(mData);
    });
  }, []);
  return {
    menuData,
  };
};
