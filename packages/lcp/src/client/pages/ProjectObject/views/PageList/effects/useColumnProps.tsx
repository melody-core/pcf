/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-29 10:53:36
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-11-05 22:57:01
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/PageList/effects/useColumnProps.tsx
 * @Description: update here
 */
import { Button, message, Popconfirm } from "antd";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProjectById } from "../../../../../../api/projectApi";
import { xFetch } from "../../../../../utils";
// import { deleteErrorObj } from './../../../../../../api/errorObject'
// import { sentError2o } from './../../../../../../api/report'
import { INIT_COLUMN_LIST } from "./const";

export const useColumnProps = ({
  // setSelectedDetail,
  selectedKeys,
  userinfo,
}) => {
  console.log("userinfo", userinfo);
  const navigator = useNavigate();
  const mergeColumns = INIT_COLUMN_LIST.concat([
    {
      title: "操作",
      valueType: "option",
      align: "center",
      fixed: "right",
      width: "250px",
      tip: "",
      render: (text, record, _, action) => [
        <Button
          key="detail"
          type="link"
          onClick={() => {
            // setSelectedDetail(record.id);
            navigator(`/pro/${record.name}`);
          }}
        >
          打开应用
        </Button>,
        <Button
          key="config"
          type="link"
          disabled={userinfo?.level <= 5}
          onClick={() => {
            navigator(`/projectConfig/${record.name}`);
          }}
        >
          应用配置
        </Button>,
        <Button
          type="link"
          key="edit"
          disabled={userinfo?.level <= 5}
          onClick={() => {
            action?.startEditable?.(record._id);
          }}
        >
          编辑
        </Button>,
        <Popconfirm
          key="delete"
          title="确定要删除这一条吗?"
          disabled={userinfo?.level <= 5}
          onConfirm={async () => {
            if (userinfo?.level <= 5) {
              return;
            }
            try {
              const result = await xFetch(
                deleteProjectById({
                  _id: record._id,
                })
              );
              const { success } = result || {};
              if (success) {
                message.success("删除成功!");
                action.reload();
              }
            } catch (error) {
              console.error(error);
              message.error(error.message || error.data?.message || "删除失败");
            }
          }}
          okText="Yes"
          cancelText="No"
        >
          <Button
            type="link"
            title={userinfo?.level <= 5 ? "此账户无操作权限" : "删除"}
            disabled={userinfo?.level <= 5}
            href="#"
          >
            删除
          </Button>
        </Popconfirm>,
      ],
    },
  ]);
  return {
    mergeColumns: mergeColumns,
  };
};
