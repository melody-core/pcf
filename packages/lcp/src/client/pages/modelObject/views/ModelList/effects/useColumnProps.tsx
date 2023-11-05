/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-29 10:53:36
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-11-05 22:55:55
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/views/ModelList/effects/useColumnProps.tsx
 * @Description: update here
 */
import { Button, message, Popconfirm } from "antd";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { deleteModelById } from "../../../../../../api/modelApi";
import NavItems from "../../../../../config/nav.config";
import { xFetch } from "../../../../../utils/xFetch";
import { MODEL_MENU_KEYS } from "../../../effect";
import { INIT_COLUMN_LIST } from "./const";

export const useColumnProps = ({
  // setSelectedDetail,
  selectedKeys,
  userinfo,
}) => {
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
          type="link"
          key="textApi"
          onClick={() => {
            window.open(`/common/${record.name}/record/list`);
          }}
        >
          模型记录
        </Button>,
        // <a
        //   key="detail"
        //   onClick={() => {
        //     // setSelectedDetail(record.id);
        //     navigator(
        //       `/errorObject?project=${selectedKeys[0]}&detail=${record._id}`
        //     );
        //   }}
        // >
        //   详情
        // </a>,
        <Button
          type="link"
          key="edit"
          disabled={userinfo?.level <= 5}
          onClick={() => {
            // setSelectedDetail(record.id);
            navigator(
              `/${NavItems[1].key}/${MODEL_MENU_KEYS.MODEL_EDIT}?_id=${record._id}`
            );
          }}
        >
          编辑
        </Button>,
        <Popconfirm
          disabled={userinfo?.level <= 5}
          key="delete"
          title="确定要删除这一条吗?"
          onConfirm={async () => {
            if (userinfo?.level <= 5) {
              return;
            }
            const { success } = await xFetch(
              deleteModelById({
                _id: record._id,
              })
            );
            if (success) {
              message.success("删除成功!");
              action.reload();
            }
          }}
          okText="Yes"
          cancelText="No"
        >
          <Button
            type="link"
            title={userinfo?.level <= 5 ? "此账户无操作权限" : "删除"}
            href="#"
            disabled={userinfo?.level <= 5}
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
