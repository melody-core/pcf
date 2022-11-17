/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-15 17:36:43
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-17 17:53:46
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldSetup/const/index.ts
 * @Description: update here
 */
import {
  MODEL_FIELD_DIGIT,
  MODEL_FIELD_TEXT,
  MODEL_FIELD_SELECT,
} from "./../../../../../../lib/modelFieldTypes";

import { TEXT_EFFECT_COLUMN } from "./TEXT_EFFECT_COLUMN";
import { SELECT_EFFECT_COLUMN } from "./SELECT_EFFECT_COLUMN";
import { ProFormColumnsType } from "@ant-design/pro-components";

export const FIELD_TYPE_CONFIG_COLUMN_MAP = new Map<
  any,
  ProFormColumnsType<Record<string, any>, "text">[]
>()
  .set(MODEL_FIELD_TEXT.value, TEXT_EFFECT_COLUMN)
  .set(MODEL_FIELD_SELECT.value, SELECT_EFFECT_COLUMN);
