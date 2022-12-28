/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-10-08 09:36:04
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 17:56:53
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/components/NormalCreateForm/index.tsx
 * @Description: update here
 */

import { FC } from 'react';
import { CommonNormalForm } from '../../common/components';
import { PAGE_CONFIG } from '../../common/type';
// import { getModelOptionList } from '../../sevice';
import { NORMAL_CREATE_FORM__PAGE_CONFIG } from './effects/const';
import { NormalCreateFormProps } from './type';

export const NormalCreateForm: FC<NormalCreateFormProps> & {
  PAGE_CONFIG: PAGE_CONFIG;
} = ({ modelConfig, actionConfig }) => (
  <CommonNormalForm
    viewType="create"
    modelConfig={modelConfig}
    actionConfig={actionConfig}
  />
);

NormalCreateForm.PAGE_CONFIG = NORMAL_CREATE_FORM__PAGE_CONFIG;
