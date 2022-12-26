/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-29 17:45:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 16:10:01
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/pageObject/views/PageList/effects/useEditableProp.ts
 * @Description: update here
 */

import { RowEditableConfig } from "@ant-design/pro-components";
import { message } from "antd";
// import { updateErrorInfo } from './../../../../../../api/errorObject'

export const useEditableProps: () => RowEditableConfig<
  Record<string, any>
> = () => {
  return {
    type: "single",
    actionRender: (_row, _config, defaultDom) => [
      defaultDom.save,
      defaultDom.cancel,
    ],
    onSave: async (rowKey, data, row) => {
      try {
        // await updateErrorInfo({
        //   hash: rowKey,
        //   status: data.status
        // });
        message.success("修改成功！");
      } catch (error) {
        console.error(error);
        message.error(error.message || error.data?.message || "修改失败！");
        return false;
      }
    },
  };
};
