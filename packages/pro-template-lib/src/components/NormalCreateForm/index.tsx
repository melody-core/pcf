/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-10-08 09:36:04
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 21:34:51
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/components/NormalCreateForm/index.tsx
 * @Description: update here
 */

import { CommonNormalForm } from '../../common/components';
import { getModelOptionList } from '../../sevice';

export const NormalCreateForm = ({ modelConfig, actionConfig }: any) => (
  <CommonNormalForm
    viewType="create"
    modelConfig={modelConfig}
    actionConfig={actionConfig}
  />
);

NormalCreateForm.PAGE_CONFIG = {
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
  actionConfig: [
    {
      title: '表单名称',
      valueType: 'text',
      dataIndex: 'formTitle',
      formItemProps: {
        required: true,
      },
    },
    {
      title: '创建成功后的跳转地址',
      valueType: 'text',
      tooltip: '创建成功后的跳转地址',
      dataIndex: 'finishedCallbackUrl',
      formItemProps: {
        required: true,
      },
    },
  ],
};
