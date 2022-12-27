/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-23 23:16:05
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-27 18:50:09
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/components/NormalFilterTableList/effects/const.ts
 * @Description: update here
 */

import { PAGE_CONFIG } from '../../../common/type';
import { getModelOptionList } from '../../../sevice';

export const NORMAL_FILTER_TABLE_PAGE_CONFIG: PAGE_CONFIG = {
  modelConfig: [
    {
      title: '页面数据主模型',
      valueType: 'select',
      dataIndex: 'mainModel',
      formItemProps: {
        rules: [
          {
            required: true,
          },
        ],
      },
      fieldProps: {
        showSearch: true,
      },
      request: getModelOptionList,
    },
  ],
  actionConfig: [
    {
      title: '表格名称',
      valueType: 'text',
      dataIndex: 'listName',
      formItemProps: {
        rules: [
          {
            required: true,
          },
        ],
      },
    },
    {
      title: '表格操作栏按钮组',
      valueType: 'formList',
      dataIndex: 'rowOptionBtnGroup',
      tooltip:
        '表格操作栏里的按钮，默认只有删除按钮。可自由配置如详情、编辑等跳转按钮',
      columns: [
        {
          valueType: 'group',
          columns: [
            {
              title: '按钮名称',
              tooltip: '按钮显示名称，如"详情"',
              dataIndex: 'title',
              formItemProps: {
                rules: [
                  {
                    required: true,
                  },
                ],
              },
              fieldProps: {
                placeholder: '请填写按钮名称，如"详情"',
              },
            },
            {
              title: '按钮类型',
              dataIndex: 'type',
              valueType: 'radio',
              tooltip: '按钮的功能类型',
              fieldProps: {
                options: [
                  {
                    label: '页面内路由',
                    value: 'linkTo',
                  },
                  {
                    label: '打开新窗口',
                    value: 'openTo',
                  },
                ],
              },
            },
            {
              valueType: 'dependency',
              name: ['type'],
              columns: ({ type }) => {
                if (type === 'linkTo') {
                  return [
                    {
                      title: '路由地址',
                    },
                  ];
                }
                if (type === 'openTo') {
                  return [
                    {
                      title: '跳转地址',
                    },
                  ];
                }
                return [];
              },
            },
          ],
        },
      ],
    },
  ],
};
