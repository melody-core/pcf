/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-19 11:38:01
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-19 11:38:02
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/ModelEdit/index.tsx
 * @Description: update here
 */
import React from "react";
import { ModelFormCommon } from "../common";
import { MODEL_VIEW_TYPES } from "../common/ModelForm/effects";

export const ModelEdit = () => (
  <ModelFormCommon viewType={MODEL_VIEW_TYPES.EDIT} />
);
