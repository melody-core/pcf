/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-19 14:55:41
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-01-29 22:20:53
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/effects/useSubmit.ts
 * @Description: update here
 */

import { message } from "antd";
import { useNavigate } from "react-router-dom";
import {
  createModel,
  updateModelById,
} from "../../../../../../../api/modelApi";
import { getSearchParams, xFetch } from "../../../../../../utils";
import { MODEL_VIEW_TYPES } from "./const";
import { UseSubmit } from "./type";

export const useSubmit: UseSubmit = ({ viewType }) => {
  const navigator = useNavigate();
  return async (values) => {
    if (viewType === MODEL_VIEW_TYPES.CREATE) {
      const { success } = await xFetch(createModel(values));
      if (success) {
        message.success("创建模型成功");
        navigator("/model_lc");
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
        navigator("/model_lc");
        return true;
      }
      return false;
    }
  };
};
