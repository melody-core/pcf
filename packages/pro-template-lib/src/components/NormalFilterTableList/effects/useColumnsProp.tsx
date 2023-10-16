/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 00:29:22
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-17 01:54:11
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/components/NormalFilterTableList/effects/useColumnsProp.tsx
 * @Description: update here
 */

import { ProColumns, ProColumnType } from '@ant-design/pro-components';
import { message, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { transform2TableColumns } from '../../../common';
import { deleteRecordById } from '../../../sevice';
import { UseColumnsPropParams } from './type';

export const useColumnsProp = ({ modelMetaData }: UseColumnsPropParams) => {
  const navigate = useNavigate();
  const [mergeColumns, setColumns] = useState<
    ProColumns<Record<string, any>, 'text'>[]
  >([]);
  useEffect(() => {
    if (!modelMetaData?.name) {
      return;
    }
    const columns = transform2TableColumns(
      modelMetaData.fields?.filter((field) => field.type !== 'table')
    );
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
          key="detail"
          onClick={() => {
            navigate(
              `${location.pathname.replace('/list', '/detail')}?_id=${
                record._id
              }`
            );
          }}
        >
          详情
        </a>,
        <a
          key="edit"
          onClick={() => {
            navigate(
              `${location.pathname.replace('/list', '/edit')}?_id=${record._id}`
            );
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
