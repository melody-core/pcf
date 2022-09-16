/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-06 20:20:57
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-06 20:39:16
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/components/TemplateList/effects/useEditableProp.ts
 * @Description: update here
 */

import { RowEditableConfig } from "@ant-design/pro-components";
import { message } from "antd";
import { updateTemplate } from "../../../../../../api/templateApi";
import { compareObject } from "../../../../../utils/compareObject";
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
      try {
        await updateTemplate({
          id: data.id,
          ...params,
        });
        message.success("修改成功！");
      } catch (error) {
        console.error(error);
        message.error(error.message || error.data?.message || "修改失败！");
        return false;
      }
    },
  };
};
