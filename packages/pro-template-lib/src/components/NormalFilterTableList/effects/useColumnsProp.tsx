/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 00:29:22
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 02:56:38
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/components/NormalFilterTableList/effects/useColumnsProp.tsx
 * @Description: update here
 */

import { ProColumns, ProColumnType } from '@ant-design/pro-components';
import { message, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';
import { transform2TableColumns } from '../../../common';
import { deleteRecordById } from '../../../sevice';
import { UseColumnsPropParams } from './type';

export const useColumnsProp = ({ modelMetaData }: UseColumnsPropParams) => {
  const [mergeColumns, setColumns] = useState<
    ProColumns<Record<string, any>, 'text'>[]
  >([]);
  useEffect(() => {
    if (!modelMetaData?.name) {
      return;
    }
    const columns = transform2TableColumns(modelMetaData.fields);
    setColumns(columns);
  }, [modelMetaData]);
  const mergeColumnsWithEdit: ProColumnType<Record<string, any>, 'text'>[] = [
    ...mergeColumns,
    {
      title: '操作',
      valueType: 'option',
      align: 'center',
      fixed: 'right',
      width: '250px',
      render: (text: any, record: any, _: any, action: any) => [
        <a
          key="edit"
          onClick={() => {
            // setSelectedDetail(record.id);
            // navigator(
            //   `/${NavItems[1].key}/${MODEL_MENU_KEYS.MODEL_EDIT}?_id=${record._id}`
            // );
            message.warn('此模板尚未支持此功能！');
          }}
        >
          编辑
        </a>,
        <Popconfirm
          key="delete"
          title="确定要删除这一条吗?"
          onConfirm={async () => {
            if (modelMetaData?.name) {
              const { success } = await deleteRecordById({
                _id: record._id,
                modelName: modelMetaData.name,
              });
              if (success) {
                message.success('删除成功!');
                action.reload();
              }
            }
          }}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">删除</a>
        </Popconfirm>,
      ],
    },
  ];
  return {
    mergeColumns: mergeColumnsWithEdit,
  };
};
