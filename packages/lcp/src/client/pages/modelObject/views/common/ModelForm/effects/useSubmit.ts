/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-19 14:55:41
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-23 00:58:28
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/effects/useSubmit.ts
 * @Description: update here
 */

import { message } from "antd";
import {
  createModel,
  updateModelById,
} from "../../../../../../../api/modelApi";
import { getSearchParams, xFetch } from "../../../../../../utils";
import { MODEL_VIEW_TYPES } from "./const";
import { UseSubmit } from "./type";

export const useSubmit: UseSubmit =
  ({ viewType }) =>
  async (values) => {
    if (viewType === MODEL_VIEW_TYPES.CREATE) {
      const { success } = await xFetch(createModel(values));
      if (success) {
        message.success("创建模型成功");
        return true;
      }
      return false;
    }
    if (viewType === MODEL_VIEW_TYPES.EDIT) {
      const { _id } = getSearchParams();
      const { success } = await xFetch(
        updateModelById({
          _id,
          data: values,
        })
      );
      if (success) {
        message.success("更新模型成功");
        return true;
      }
      return false;
    }
  };
