/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-10-08 09:36:04
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 18:56:13
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/components/NormalEditForm/index.tsx
 * @Description: update here
 */

import { FC } from 'react';
import { CommonNormalForm } from '../../common/components';
import { PAGE_CONFIG } from '../../common/type';
import { NORMAL_EDIT_FORM__PAGE_CONFIG } from './effects/const';
import { NormalEditFormProps } from './type';

export const NormalEditForm: FC<NormalEditFormProps> & {
  PAGE_CONFIG: PAGE_CONFIG;
} = ({ modelConfig, actionConfig }) => (
  <CommonNormalForm
    viewType="edit"
    modelConfig={modelConfig}
    actionConfig={actionConfig}
  />
);

NormalEditForm.PAGE_CONFIG = NORMAL_EDIT_FORM__PAGE_CONFIG;
