/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 19:12:37
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 20:10:04
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/components/CommonNormalForm/index.tsx
 * @Description: update here
 */

import { BetaSchemaForm, ProFormInstance } from '@ant-design/pro-components';
import { Button } from 'antd';
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
    formRef,
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
      submitter={
        viewType === 'detail'
          ? {
              render({ submit }) {
                return (
                  <Button type="primary" onClick={submit}>
                    返回列表
                  </Button>
                );
              },
            }
          : undefined
      }
      layoutType="Form"
      // grid
      // colProps={
      //   viewType === 'detail'
      //     ? {
      //         span: 8,
      //       }
      //     : undefined
      // }
    />
  );
};
