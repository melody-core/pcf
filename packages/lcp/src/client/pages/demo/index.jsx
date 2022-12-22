/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-16 18:57:48
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-21 22:19:15
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/demo/index.jsx
 * @Description: update here
 */

import React, { useContext } from "react";
import { BetaSchemaForm, ProProvider } from "@ant-design/pro-components";

const CusProField = ({}) => (
  <BetaSchemaForm
    columns={[{ dataIndex: "name", title: "名字" }]}
    onValuesChange={console.log}
    onFinish={async (values) => console.log("values:", values)}
  />
);

export const Demo = () => {
  const values = useContext(ProProvider);
  return (
    <ProProvider.Provider
      value={{
        ...values,
        valueTypeMap: {
          cusProField: {
            renderFormItem: (_, props) => {
              return <CusProField {...props} {...props.fieldProps} />;
            },
          },
        },
      }}
    >
      <BetaSchemaForm
        columns={[
          {
            valueType: "formList",
            dataIndex: "formList",
            columns: [
              {
                valueType: "cusProField",
                dataIndex: "cusObj",
                title: "名称",
              },
            ],
          },
        ]}
      />
    </ProProvider.Provider>
  );
};

export default Demo;
