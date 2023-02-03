/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-29 10:53:36
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-03 11:47:02
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/PageList/effects/useColumnProps.tsx
 * @Description: update here
 */
import { message, Popconfirm } from "antd";
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
            key="detail"
            onClick={() => {
              // setSelectedDetail(record.id);
              navigator(`/pro/${record.name}`);
            }}
          >
            打开应用
          </a>,
          <a
            key="config"
            onClick={() => {
              navigator(`/projectConfig/${record.name}`);
            }}
          >
            应用配置
          </a>,
          <a
            key="edit"
            onClick={() => {
              action?.startEditable?.(record._id);
            }}
          >
            编辑
          </a>,
          <Popconfirm
            key="delete"
            title="确定要删除这一条吗?"
            onConfirm={async () => {
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
                message.error(
                  error.message || error.data?.message || "删除失败"
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
