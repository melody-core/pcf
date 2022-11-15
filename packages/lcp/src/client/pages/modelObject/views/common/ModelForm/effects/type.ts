/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-10-04 01:15:59
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-10-04 01:18:46
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/components/ModelCreate/effects/type.ts
 * @Description: update here
 */

import { FormInstance } from "antd";
import { MutableRefObject } from "react";

export interface UseCurrentPropParams {
  formRef: MutableRefObject<FormInstance<any> | undefined>;
}

export interface UseCurrentProp {
  (params: UseCurrentPropParams): {
    current: number;
    handleCurrentChange: (next: any) => void;
  };
}
