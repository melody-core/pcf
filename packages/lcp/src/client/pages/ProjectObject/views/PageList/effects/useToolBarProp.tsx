import { PlusOutlined } from "@ant-design/icons";
import { ActionType, BetaSchemaForm } from "@ant-design/pro-components";
import { Button, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavItems from "../../../../../config/nav.config";
import { PAGE_MENU_KEYS } from "../../../effect";

export const useToolBarProp = ({
  tableActionRef,
  userinfo,
}): ((
  action: ActionType,
  rows: {
    selectedRowKeys?: (string | number)[];
    selectedRows?: Record<string, any>[];
  }
) => React.ReactNode[]) => {
  const navigate = useNavigate();
  const result = [
    <Button
      key="button"
      icon={<PlusOutlined />}
      onClick={() =>
        navigate(`/${NavItems[0].key}/${PAGE_MENU_KEYS.PAGE_CREATE}`)
      }
      type="primary"
    >
      新建
    </Button>,
  ];
  return () => result;
};
