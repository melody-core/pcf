/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-19 11:51:37
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-10-01 19:31:47
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/Status/NotOpen/index.tsx
 * @Description: update here
 */
import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { Result } from "antd";
import globalStore from "./../../../store/global";
import NavConfig from "../../../config/nav.config";

const NotOpen = observer(({ store: { setSelectedKey } }) => (
  <Result
    status="warning"
    title="暂不开放"
    subTitle={`抱歉，您访问的版本只开放基础能力，\n如果您想要体验更高级的能力，请联系伟大的作者 @六弦\n 钉钉号: melodywxy,\n 感谢您的关注！`}
    extra={
      <Link to="/" onClick={() => setSelectedKey(NavConfig[0].key)}>
        回到首页
      </Link>
    }
  />
));

export default () => <NotOpen store={globalStore} />;
