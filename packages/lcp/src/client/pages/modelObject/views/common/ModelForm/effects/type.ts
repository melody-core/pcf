/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-10-04 01:15:59
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-19 11:47:04
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/effects/type.ts
 * @Description: update here
 */

import { ProFormInstance } from "@ant-design/pro-components";
import { MutableRefObject } from "react";
import { MODEL_VIEW_TYPES } from "./const";

export interface UseCurrentPropParams {}

export interface UseCurrentProp {
  (params?: UseCurrentPropParams): {
    current: number;
    handleCurrentChange: (next: any) => void;
  };
}

export interface UseInitValuesParams {
  formMapRef: MutableRefObject<React.MutableRefObject<ProFormInstance<any>>[]>;
  viewType: MODEL_VIEW_TYPES;
}
export interface UseInitValues {
  (params: UseInitValuesParams): void;
}
