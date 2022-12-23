/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 02:33:11
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 02:42:51
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/components/NormalFilterTableList/effects/useToolBarProp.tsx
 * @Description: update here
 */

import { PlusOutlined } from '@ant-design/icons';
import { ActionType } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const useToolBarProp = ({}): ((
  action?: ActionType,
  rows?: {
    selectedRowKeys?: (string | number)[];
    selectedRows?: Record<string, any>[];
  }
) => React.ReactNode[]) => {
  // const navigate = useNavigate();
  const result = [
    <Button
      key="button"
      icon={<PlusOutlined />}
      onClick={() => {
        // navigate(`/common_pages/`)
        message.warn('此页面模板尚未完善此功能!');
      }}
      type="primary"
    >
      新建
    </Button>,
  ];
  return () => result;
};
