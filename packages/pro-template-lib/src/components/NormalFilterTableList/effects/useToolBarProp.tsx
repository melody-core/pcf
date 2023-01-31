/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 02:33:11
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-01-31 17:17:38
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/components/NormalFilterTableList/effects/useToolBarProp.tsx
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
  const navigate = useNavigate();
  const result = [
    <Button
      key="button"
      icon={<PlusOutlined />}
      onClick={() => {
        navigate(`${location.pathname.replace('/list', '/create')}`);
      }}
      type="primary"
    >
      新建
    </Button>,
  ];
  return () => result;
};
