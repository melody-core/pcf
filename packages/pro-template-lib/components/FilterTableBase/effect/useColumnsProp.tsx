import { ProColumns } from '@ant-design/pro-components';
import { Popconfirm } from 'antd';
import React from 'react';
import type { UseColumnsProp } from './type';

export const useColumnsProp: UseColumnsProp = ({ columns, autoRowEditConfig, rowKey }) => {
  if (!autoRowEditConfig) {
    return columns;
  }
  if (!columns) {
    return;
  }
  const targetOptionColumn = columns.find((item) => item.key === 'option');
  if (targetOptionColumn) {
    // 以用户自定义的为准
    return columns;
  }
  const { onDelete, onSave } = autoRowEditConfig;
  if (!onDelete && !onSave) {
    return columns;
  }
  // 自动处理！
  const optionsColumn: ProColumns<Record<any, any>, 'text'> = {
    title: '操作',
    valueType: 'option',
    key: 'option',
  };
  optionsColumn.render = (text, record, _, action) => {
    const OptionColumnResult = [];
    if (onSave) {
      OptionColumnResult.push(
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(typeof rowKey === 'string' ? record[rowKey] : record.id);
          }}
        >
          编辑
        </a>,
      );
    }
    if (onDelete) {
      OptionColumnResult.push(
        <Popconfirm
          key="delete"
          title="确认要删除这一项吗?"
          onConfirm={async () => {
            await onDelete(typeof rowKey === 'string' ? record[rowKey] : record.id, record);
            action?.reload();
          }}
          okText="确认"
          cancelText="取消"
        >
          <a href="#">删除</a>
        </Popconfirm>,
      );
    }
    // TODO - COPY
    return OptionColumnResult;
  };
  return columns.concat(optionsColumn);
};
