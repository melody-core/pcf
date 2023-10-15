/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-15 14:14:53
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 14:39:38
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/login/index.tsx
 * @Description: update here
 */

import React from "react";
import { observer } from "mobx-react";
import { BetaSchemaForm } from "@ant-design/pro-components";
import globalObjectStore from "../../store/global";
import { loginAdminUser } from "../../../api/login";
import { xFetch } from "../../utils";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

export const LoginForm = observer(
  ({
    store: {
      globalObject: {},
      setUserinfo,
      // setSelectedKeys,
    },
  }) => {
    const navigate = useNavigate();
    return (
      <div className={styles["login_page_wrap"]}>
        <BetaSchemaForm
          columns={[
            {
              title: "用户名",
              dataIndex: "username",
              formItemProps: {
                rules: [
                  {
                    required: true,
                    message: "用户名必填",
                  },
                ],
              },
            },
            {
              title: "密码",
              dataIndex: "password",
              valueType: "password",
              formItemProps: {
                rules: [
                  {
                    required: true,
                    message: "密码必填",
                  },
                ],
              },
            },
          ]}
          onFinish={async (formData) => {
            const result = await xFetch(loginAdminUser(formData));
            const { success, data } = result || {};
            if (success) {
              setUserinfo(data?.userinfo);
              localStorage.setItem("cookie", data?.cookie);
              navigate("/");
            }
          }}
        />
      </div>
    );
  }
);

export default () => <LoginForm store={globalObjectStore} />;
