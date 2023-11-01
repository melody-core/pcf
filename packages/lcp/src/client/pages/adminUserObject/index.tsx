/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-11-01 21:47:00
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-11-01 22:40:55
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/adminUserObject/index.tsx
 * @Description: update here
 * export c
 */

import React from "react";
import { observer } from "mobx-react";
import globalStore from "./../../store/global";
import { ProTable, BetaSchemaForm } from "@ant-design/pro-components";
import Popconfirm from "antd/lib/popconfirm";
import { Button, message } from "antd";
import {
  createNextUser,
  createReadOnlyUser,
  deleteAdminUser,
  findAdminUsers,
} from "../../../api/login";
import { xFetch } from "../../utils";
import Bread from "../../components/Bread";
import { PlusOutlined } from "@ant-design/icons";
import { ADMIN_USER_OPTIONS } from "./effects/const";

export const AdminUserObject = observer(
  ({
    store: {
      globalObject: { userinfo },
    },
  }) => {
    if (userinfo?.level !== 9) {
      return <div>非超级管理员账号无权限访问！</div>;
    }
    return (
      <ProTable
        title={() => <Bread lvs={["管理员账号", "管理员账号管理列表"]} />}
        pagination={{}}
        dateFormatter="string"
        request={async () => {
          try {
            const result = await xFetch(findAdminUsers());
            const { success, data } = result || {};
            if (success) {
              return {
                data: data || [],
                success: true,
              };
            }
          } catch (error) {
            console.error(error);
          }
          return {
            success: false,
            data: [],
          };
        }}
        toolBarRender={(action) => [
          <BetaSchemaForm
            layoutType="ModalForm"
            trigger={
              <Button key="button" icon={<PlusOutlined />} type="primary">
                新建
              </Button>
            }
            onFinish={async (formData) => {
              const { level, ...others } = formData || {};
              let targetCreateApi;
              if (level === 3) {
                targetCreateApi = createReadOnlyUser;
              }
              if (level === 7) {
                targetCreateApi = createNextUser;
              }
              if (!targetCreateApi) {
                return false;
              }
              try {
                const result = await xFetch(
                  targetCreateApi({
                    cookie: localStorage.getItem("cookie"),
                    ...others,
                  })
                );
                const { success } = result || {};
                if (success) {
                  message.success("创建成功!");
                  action.reload();
                  return true;
                }
              } catch (error) {
                console.error(error);
                message.error(
                  error.message || error.data?.message || "创建失败"
                );
              }
              return false;
            }}
            columns={[
              {
                title: "管理员角色类型",
                dataIndex: "level",
                valueType: "select",
                fieldProps: {
                  options: ADMIN_USER_OPTIONS,
                },
                formItemProps: {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                },
              },
              {
                dataIndex: "username",
                title: "账户名",
                formItemProps: {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                },
              },
              {
                dataIndex: "phone",
                title: "手机号",
                formItemProps: {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                },
              },
              {
                dataIndex: "password",
                title: "密码",
                formItemProps: {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                },
              },
            ]}
          />,
        ]}
        scroll={{
          x: "max-content",
        }}
        columns={[
          {
            dataIndex: "username",
            title: "账户名",
          },
          {
            dataIndex: "phone",
            title: "手机号",
            formItemProps: {
              rules: [
                {
                  required: true,
                },
              ],
            },
          },
          {
            dataIndex: "level",
            title: "账户类别",
            valueType: "select",
            fieldProps: {
              options: ADMIN_USER_OPTIONS,
            },
            tooltip:
              "账号管理仅超级管理员有权限，次级管理员拥有所有其他权限, 临时管理员拥有其他只读权限和部分特定模型的权限!",
          },
          {
            title: "操作",
            valueType: "option",
            align: "center",
            fixed: "right",
            width: "250px",
            tip: "",
            render: (text, record, _, action) => [
              <Popconfirm
                key="delete"
                title="确定要删除这一条吗?"
                onConfirm={async () => {
                  try {
                    const result = await xFetch(
                      deleteAdminUser({
                        _id: record._id,
                        cookie: localStorage.getItem("cookie"),
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
        ]}
        rowKey="_id"
      />
    );
  }
);

export default () => <AdminUserObject store={globalStore} />;
