/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-28 19:02:59
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-06 09:22:31
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/components/pageList/index.tsx
 * @Description: update here
 */

import React, { FC, useRef } from "react";
import { observer } from "mobx-react";
import { ProTable, BetaSchemaForm } from "@ant-design/pro-components";
import pageObjectStore from "../../../../store/pageObject";
import {
  useColumnProps,
  useEditableProps,
  useRequestProps,
  useToolBarProp,
} from "./effects";
import { INIT_COLUMN_LIST } from "./effects/const";
// import { getErrorInfoByID } from './../../../../../api/errorObject'
import { useNavigate } from "react-router-dom";
import Bread from "../../../../components/Bread";

export const PageList = observer(
  ({
    store: {
      pageObject: { selectedKeys },
      // setSelectedDetail,
    },
  }) => {
    const tableActionRef = useRef();
    // const navigator = useNavigate();
    const { mergeColumns } = useColumnProps({
      // setSelectedDetail,
      selectedKeys,
    });
    const mergeRequest = useRequestProps();
    const mergeEditable = useEditableProps();
    const mergeToolBarRender = useToolBarProp({
      tableActionRef,
    });
    return (
      <>
        <ProTable
          title={() => <Bread lvs={["页面管理", "页面列表"]} />}
          actionRef={tableActionRef}
          columns={mergeColumns}
          rowKey="hash"
          dateFormatter="string"
          request={mergeRequest}
          scroll={{
            x: "max-content",
          }}
          params={{
            project:
              selectedKeys[0] === "ALL"
                ? undefined
                : selectedKeys[0] || undefined,
          }}
          pagination={{}}
          editable={mergeEditable}
          toolBarRender={mergeToolBarRender}
        />
        {/* {(selectedDetail || selectedDetail === 0) && (
          <BetaSchemaForm
            layoutType="DrawerForm"
            columns={INIT_COLUMN_LIST.concat(DETAIL_COLUMN_LIST)}
            readonly
            params={{
              targetDetail: selectedDetail,
            }}
            visible={true}
            request={async ({ targetDetail }) => {
              if (!targetDetail && targetDetail !== 0) {
                return {};
              }
              // const result = await getErrorInfoByID({id: targetDetail});
              const result = {};
              return result;
            }}
            drawerProps={{
              onClose: async () => {
                setSelectedDetail(null);
                navigator(`/errorObject?project=${selectedKeys[0] || "ALL"}`);
              },
              destroyOnClose: true,
            }}
            onFinish={async () => {
              setSelectedDetail(null);
              navigator(`/errorObject?project=${selectedKeys[0] || "ALL"}`);
            }}
          />
        )} */}
      </>
    );
  }
);

export default () => <PageList store={pageObjectStore} />;
