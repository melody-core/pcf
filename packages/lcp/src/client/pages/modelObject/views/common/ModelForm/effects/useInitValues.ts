/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-19 11:43:28
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-03-09 16:47:21
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/effects/useInitValues.ts
 * @Description: update here
 */

import { useEffect } from "react";
import { getModelById } from "../../../../../../../api/modelApi";
import { getSearchParams, xFetch } from "../../../../../../utils";
import { MODEL_VIEW_TYPES } from "./const";
import { UseInitValues } from "./type";

export const useInitValues: UseInitValues = ({ formMapRef, viewType }) => {
  useEffect(() => {
    const { _id } = getSearchParams();
    if (viewType === MODEL_VIEW_TYPES.CREATE) {
      const initValues = getSearchParams();
      formMapRef?.current?.forEach((formInstanceRef) => {
        formInstanceRef?.current?.setFieldsValue(initValues);
      });
    }
    if (viewType === MODEL_VIEW_TYPES.EDIT) {
      xFetch(
        getModelById({
          _id,
        })
      ).then((res) => {
        const { data = {} } = res;
        formMapRef?.current?.forEach((formInstanceRef) => {
          formInstanceRef?.current?.setFieldsValue(data);
        });
      });
    }
  }, []);
};
