/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-06 20:20:57
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-11 10:18:52
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/views/TemplateList/effects/useEditableProp.ts
 * @Description: update here
 */

import { RowEditableConfig } from "@ant-design/pro-components";
import { message } from "antd";
import { updateTemplate } from "../../../../../../api/templateApi";
import { compareObject } from "../../../../../utils/compareObject";
import { xFetch } from "../../../../../utils/xFetch";
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
      const params = compareObject(data, row);
      const { success } = await xFetch(
        updateTemplate({
          _id: data._id,
          ...params,
        })
      );
      success && message.success("修改成功！");
    },
  };
};
