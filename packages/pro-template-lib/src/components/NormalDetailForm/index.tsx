/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-10-08 09:36:04
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 18:55:24
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/components/NormalDetailForm/index.tsx
 * @Description: update here
 */

import { FC } from 'react';
import { CommonNormalForm } from '../../common/components';
import { PAGE_CONFIG } from '../../common/type';
import { NORMAL_DETAIL_FORM__PAGE_CONFIG } from './effects/const';
import { NormalDetailFormProps } from './type';

export const NormalDetailForm: FC<NormalDetailFormProps> & {
  PAGE_CONFIG: PAGE_CONFIG;
} = ({ modelConfig, actionConfig }) => (
  <CommonNormalForm
    viewType="detail"
    modelConfig={modelConfig}
    actionConfig={actionConfig}
  />
);

NormalDetailForm.PAGE_CONFIG = NORMAL_DETAIL_FORM__PAGE_CONFIG;
