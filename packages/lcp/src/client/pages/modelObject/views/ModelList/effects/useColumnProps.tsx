/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-29 10:53:36
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-11 16:20:53
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/views/ModelList/effects/useColumnProps.tsx
 * @Description: update here
 */
import { message, Popconfirm } from "antd";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { deleteModelById } from "../../../../../../api/modelApi";
import { xFetch } from "../../../../../utils/xFetch";
// import { deleteErrorObj } from './../../../../../../api/errorObject'
// import { sentError2o } from './../../../../../../api/report'
import { INIT_COLUMN_LIST } from "./const";

export const useColumnProps = ({
  // setSelectedDetail,
  selectedKeys,
}) => {
  const navigator = useNavigate();
  const mergeColumnsRef = useRef(
    INIT_COLUMN_LIST.concat([
      {
        title: "操作",
        valueType: "option",
        align: "center",
        fixed: "right",
        width: "250px",
        tip: "",
        render: (text, record, _, action) => [
          <a
            key="editable"
            onClick={() => {
              action?.startEditable?.(record.hash);
            }}
          >
            状态修改
          </a>,
          <a
            key="detail"
            onClick={() => {
              // setSelectedDetail(record.id);
              navigator(
                `/errorObject?project=${selectedKeys[0]}&detail=${record._id}`
              );
            }}
          >
            详情
          </a>,
          <Popconfirm
            key="delete"
            title="确定要删除这一条吗?"
            onConfirm={async () => {
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
            <a href="#">删除</a>
          </Popconfirm>,
        ],
      },
    ])
  );
  return {
    mergeColumns: mergeColumnsRef.current,
  };
};
