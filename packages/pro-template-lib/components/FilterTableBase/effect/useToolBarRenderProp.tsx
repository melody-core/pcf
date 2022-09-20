/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-14 17:40:46
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-06-27 13:09:05
 * @FilePath: /corteza-webapp-compose/Users/wxy/codeWorks/bui-group/packages/bui-pro/src/SPTable/components/SPTableBase/effect/useToolBarRenderProp.tsx
 * @Description: update here
 */

import { Button } from 'antd';
import React from 'react';

import { PlusOutlined } from '@ant-design/icons';

import { ERROR_MSG_MAP } from './console_msg/errorMsgs';
import type { UseToolBarRenderProp } from './type';

export const useToolBarRender: UseToolBarRenderProp = ({
  toolBarRender,
  autoAddRecordConfig,
  setAddRecordWrap,
  // addRecordWrapVisible,
}) => {
  if (toolBarRender) {
    return toolBarRender;
  }
  if (!autoAddRecordConfig) {
    return () => [];
  }
  const { onAddBtnClick, onSave } = autoAddRecordConfig;
  const handleClick = () => {
    if (onAddBtnClick) {
      onAddBtnClick();
      return;
    }
    if (!onSave) {
      console.error(ERROR_MSG_MAP.autoAddRecordConfigWithOutOnSave);
      return;
    }
    setAddRecordWrap(true);
  };
  const result = [
    <Button key="button" onClick={handleClick} icon={<PlusOutlined />} type="primary">
      新建
    </Button>,
  ];
  return () => {
    return result;
  };
};
