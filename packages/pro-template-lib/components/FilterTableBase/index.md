---
nav:
  title: Web 高级组件
  path: /bui-pro
group:
  title: Table
---

## SPTableBase

> 纯 UI 组件，在 ProTable 的基础上封装了它的属性。可用于纯 UI 自定义处理。维护人 @六弦

### demo1-最佳实践—自动化增删改查

> 传入 columns, request 以及配合 request 的 autoLineEditConfig 及 autoAddRecordConfig,即可生成强大的含有自动化增删改查的表格。

```tsx
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { SPTableBase } from './index.tsx';
import React, { useRef } from 'react';
import request from 'umi-request';
console.log('SPTableBase', SPTableBase )

const columns: ProColumns<Record<any, any>>[] = [
  // {
  //   dataIndex: 'index',
  //   valueType: 'indexBorder',
  //   width: 48,
  // },
  {
    title: '姓名',
    dataIndex: 'name',
    copyable: true,
    ellipsis: true,
    // search: false,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
  {
    disable: true,
    title: '性别',
    // search: false,
    dataIndex: 'sex',
    filters: true,
    onFilter: true,
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      '0': {
        text: 'Girl',
        status: 'Error',
      },
      '1': {
        text: 'Boy',
        status: 'Success',
      },
    },
  },
  {
    title: '说明',
    dataIndex: 'desc',
    copyable: true,
    tip: '标题过长会自动收缩',
    ellipsis: true,
    // search: false,
  },
];

export default () => {
  return (
    <SPTableBase<Record<any, any>>
      autoRowEditConfig={{
        onSave: async () => {},
        onDelete: async () => {},
      }}
      autoAddRecordConfig={{
        onSave: async () => {},
        // recordFormType: 'ModalForm'
      }}
      columns={columns}
      request={async (params = {}, sort, filter) => {
        return request<{
          data: Record<any, any>[];
        }>('http://yapi.boulderaitech.com/mock/208/getTableDataSourceBase01', {
          params,
          method: 'POST',
        });
      }}
      rowKey="id"
      headerTitle="SPTableDemo1"
    />
  );
};
```

### demo2-自动化增删改查-弹窗模式的新增表单

> 传入 columns, request 以及配合 request 的 autoLineEditConfig,即可生成强大的含有自动化增删改查的表格。

```tsx
import { ActionType } from '@ant-design/pro-components';
import { SPTableBase } from './index.tsx';
import React,{ useRef } from 'react';
import request from 'umi-request';
import { MOCK_TABLE_COLUMNS_BASE_0 } from './MOCK.ts';

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <SPTableBase<Record<any, any>>
      autoRowEditConfig={{
        onSave: async () => {},
        onDelete: async () => {},
      }}
      autoAddRecordConfig={{
        onSave: async () => {},
        recordFormType: 'ModalForm',
      }}
      columns={MOCK_TABLE_COLUMNS_BASE_0}
      request={async (params = {}, sort, filter) => {
        return request<{
          data: Record<any, any>[];
        }>('http://yapi.boulderaitech.com/mock/208/getTableDataSourceBase01', {
          params,
          method: 'POST',
        });
      }}
      rowKey="id"
      headerTitle="SPTableDemo1"
    />
  );
};
```

## 关于 API 文档～

在封装 ProTable 的同时，依旧保留了它原本的 API 能力。如果下面的文档无法满足你的要求，请移步：<https://procomponents.ant.design/components/table/#api> <API />
