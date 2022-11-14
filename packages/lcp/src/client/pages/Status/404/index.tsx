/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-06 16:58:35
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-10-01 19:04:29
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/Status/404/index.tsx
 * @Description: update here
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import globalStore from "./../../../store/global";
import { Result } from "antd";
import NavConfig from "../../../config/nav.config";

const Page404 = observer(({ store: { setSelectedKey } }) => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <a
          onClick={() => {
            setSelectedKey(NavConfig[0].key);
            navigate("/");
          }}
        >
          回到首页
        </a>
      }
    />
  );
});

export default () => <Page404 store={globalStore} />;
