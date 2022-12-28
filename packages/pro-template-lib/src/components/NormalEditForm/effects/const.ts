/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-28 17:46:13
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 18:57:32
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/components/NormalEditForm/effects/const.ts
 * @Description: update here
 */

import { getModelOptionList } from '../../../sevice';

import { PAGE_CONFIG } from '../../../common/type';

export const NORMAL_EDIT_FORM__PAGE_CONFIG: PAGE_CONFIG = {
  modelConfig: [
    {
      title: '页面数据主模型',
      valueType: 'select',
      dataIndex: 'mainModel',
      formItemProps: {
        required: true,
      },
      fieldProps: {
        showSearch: true,
      },
      request: getModelOptionList,
    },
  ],
  actionConfig: [],
};
