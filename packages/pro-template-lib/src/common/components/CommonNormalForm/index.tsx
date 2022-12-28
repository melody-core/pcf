/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 19:12:37
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 19:00:43
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/components/CommonNormalForm/index.tsx
 * @Description: update here
 */

import { BetaSchemaForm, ProFormInstance } from '@ant-design/pro-components';
import { FC, useRef } from 'react';
import { useModelMetaData, useColumnsProp, useInitValue } from './effects';
import { useSubmit } from './effects/useSubmit';
import { CommonNormalFormProps } from './type';

export const CommonNormalForm: FC<CommonNormalFormProps> = ({
  viewType,
  modelConfig,
  // actionConfig,
}) => {
  const formRef = useRef<ProFormInstance<Record<string, any>>>();
  const { modelMetaData } = useModelMetaData({
    modelConfig,
  });
  const { mergeColumns } = useColumnsProp({
    modelMetaData,
    viewType,
  });
  const { onFinish } = useSubmit({
    modelConfig,
    viewType,
  });
  useInitValue({
    viewType,
    modelConfig,
    formRef,
  });
  return (
    <BetaSchemaForm
      formRef={formRef}
      onFinish={onFinish}
      columns={mergeColumns}
      layoutType="Form"
      // grid
      // colProps={{s
      //   span: 8,
      // }}
    />
  );
};
