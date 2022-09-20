/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-20 14:12:57
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-20 14:13:53
 * @FilePath: /@bui/bui-pro/src/SPTable/components/SPTableBase/MOCK.ts
 * @Description: update here
 */

import { ProColumns } from '@ant-design/pro-components';

export const MOCK_TABLE_COLUMNS_BASE_0: Array<ProColumns<Record<any, any>>> = [
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
