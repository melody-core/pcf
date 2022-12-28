/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-28 17:46:13
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 17:47:33
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/components/NormalCreateForm/effects/const.ts
 * @Description: update here
 */

import { getModelOptionList } from '../../../sevice';

import { PAGE_CONFIG } from '../../../common/type';

export const NORMAL_CREATE_FORM__PAGE_CONFIG: PAGE_CONFIG = {
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
