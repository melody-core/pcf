/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-23 23:14:01
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-03-09 16:48:50
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/components/NormalFilterTableList/index.tsx
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
import { NORMAL_FILTER_TABLE_PAGE_CONFIG } from './effects/const';

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
      headerTitle={actionConfig?.listName || `${modelMetaData?.title}记录列表`}
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

NormalFilterTableList.PAGE_CONFIG = NORMAL_FILTER_TABLE_PAGE_CONFIG;
