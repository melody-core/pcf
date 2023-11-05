import { PlusOutlined } from "@ant-design/icons";
import { ActionType, BetaSchemaForm } from "@ant-design/pro-components";
import { Button, message } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavItems from "../../../../../config/nav.config";
import { MODEL_MENU_KEYS } from "../../../effect";

export const useToolBarProp = ({
  tableActionRef,
  dataType,
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
      disabled={userinfo?.level <= 5}
      icon={<PlusOutlined />}
      onClick={() =>
        navigate(
          `/${NavItems[1].key}/${MODEL_MENU_KEYS.MODEL_CREATE}?dataType=${dataType}`
        )
      }
      type="primary"
    >
      新建
    </Button>,
  ];
  return () => result;
};
