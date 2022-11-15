/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 15:43:29
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-15 17:02:20
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/ModelCreate/index.tsx
 * @Description: update here
 */

import React from "react";
import { ModelFormCommon } from "../common";
import { MODEL_VIEW_TYPES } from "../common/ModelForm/effects";

export const ModelCreate = () => (
  <ModelFormCommon viewType={MODEL_VIEW_TYPES.CREATE} />
);
