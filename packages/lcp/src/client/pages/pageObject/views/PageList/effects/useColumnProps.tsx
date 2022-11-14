/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-29 10:53:36
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-05 14:43:48
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/components/pageList/effects/useColumnProps.tsx
 * @Description: update here
 */
import { message, Popconfirm } from "antd";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
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
                `/errorObject?project=${selectedKeys[0]}&detail=${record.id}`
              );
            }}
          >
            详情
          </a>,
          <Popconfirm
            key="delete"
            title="确定要删除这一条吗?"
            onConfirm={async () => {
              try {
                // await deleteErrorObj({
                //   hash: record.hash
                // })
                message.success("删除成功!");
                action.reload();
              } catch (error) {
                console.error(error);
                message.error(
                  error.message || error.data?.message || "删除请求失败"
                );
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
