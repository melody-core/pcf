/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-28 19:02:59
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-11-05 22:58:27
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/views/ModelList/index.tsx
 * @Description: update here
 */

import React, { useRef } from "react";
import { observer } from "mobx-react";
import { ProTable } from "@ant-design/pro-components";
import modelObjectStore from "../../../../store/modelObject";
import {
  useColumnProps,
  useEditableProps,
  useRequestProps,
  useToolBarProp,
} from "./effects";
import globalStore from "../../../../store/global";
import Bread from "../../../../components/Bread";
import { useParams } from "react-router-dom";

const List = observer(
  ({
    store: {
      modelObject: { selectedKeys },
      // setSelectedDetail,
    },
    global: {
      globalObject: { userinfo },
    },
  }) => {
    const { dataType = "basics" } = useParams();
    const tableActionRef = useRef();
    // const navigator = useNavigate();
    const { mergeColumns } = useColumnProps({
      // setSelectedDetail,
      selectedKeys,
      userinfo,
    });
    const mergeRequest = useRequestProps({
      dataType,
    });
    const mergeEditable = useEditableProps();
    const mergeToolBarRender = useToolBarProp({
      tableActionRef,
      dataType,
      userinfo,
    });

    return (
      <>
        <ProTable
          headerTitle={<Bread lvs={["模型管理", "模型列表"]} />}
          actionRef={tableActionRef}
          columns={mergeColumns}
          request={mergeRequest}
          scroll={{
            x: "max-content",
          }}
          params={{
            dataType,
          }}
          rowKey="name"
          pagination={{}}
          editable={mergeEditable}
          toolBarRender={mergeToolBarRender}
        />
      </>
    );
  }
);

export const ModelList = () => (
  <List store={modelObjectStore} global={globalStore} />
);
