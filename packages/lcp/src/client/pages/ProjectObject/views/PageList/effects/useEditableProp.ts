/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-29 17:45:39
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-02 16:07:42
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/ProjectObject/views/PageList/effects/useEditableProp.ts
 * @Description: update here
 */

import { RowEditableConfig } from "@ant-design/pro-components";
import { message } from "antd";
import { updateProjectById } from "../../../../../../api/projectApi";
import { xFetch } from "../../../../../utils";
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
        const { _id, desc, name, title } = data;
        const result = await xFetch(
          updateProjectById({
            _id,
            data: {
              desc,
              name,
              title,
            },
          })
        );
        const { success } = result || {};
        if (success) {
          message.success("修改成功！");
        }
      } catch (error) {
        console.error(error);
        message.error(error.message || error.data?.message || "修改失败！");
        return false;
      }
    },
  };
};
