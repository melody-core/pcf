/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-23 23:14:01
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 13:26:25
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/components/NormalFilterTableList/index.tsx
 * @Description: update here
 */
import { FC } from 'react';
import { ProTable } from '@ant-design/pro-components';
import {
  useColumnsProp,
  useMetaData,
  useRequestProp,
  useToolBarProp,
} from './effects';
import { NormalFilterTableListProps } from './type';
import { PAGE_CONFIG } from '../../common/type';
import { getModelOptionList } from '../../sevice';

export const NormalFilterTableList: FC<NormalFilterTableListProps> & {
  PAGE_CONFIG: PAGE_CONFIG;
} = ({ modelConfig, actionConfig }) => {
  const { modelMetaData } = useMetaData({
    modelConfig,
  });
  const { mergeColumns } = useColumnsProp({
    modelMetaData,
  });
  const { mergeRequest } = useRequestProp();
  const toolBarRender = useToolBarProp({});
  return (
    <ProTable
      title={() => actionConfig?.listName}
      pagination={{}}
      params={{
        mainModel: modelConfig?.mainModel,
      }}
      rowKey="_id"
      dateFormatter="string"
      columns={mergeColumns}
      request={mergeRequest}
      toolBarRender={toolBarRender}
    />
  );
};

NormalFilterTableList.PAGE_CONFIG = {
  modelConfig: [
    {
      title: '页面数据主模型',
      valueType: 'select',
      dataIndex: 'mainModel',
      formItemProps: {
        required: true,
      },
      request: getModelOptionList,
    },
  ],
  actionConfig: [
    {
      title: '列表名称',
      valueType: 'text',
      dataIndex: 'listName',
      formItemProps: {
        required: true,
      },
    },
    {
      title: '创建页面跳转链接',
      valueType: 'text',
      tooltip: '点击新建按钮跳转的页面url',
      dataIndex: 'createPageUrl',
      formItemProps: {
        required: true,
      },
    },
    {
      title: '编辑页面跳转链接',
      valueType: 'text',
      dataIndex: 'editPageUrl',
      formItemProps: {
        required: true,
      },
    },
  ],
};
