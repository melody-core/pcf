/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-19 11:43:28
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-01-29 22:06:47
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
