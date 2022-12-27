/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 19:12:37
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 21:32:33
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/components/CommonNormalForm/index.tsx
 * @Description: update here
 */

import { BetaSchemaForm } from '@ant-design/pro-components';
import { useModelMetaData, useColumnsProp } from './effects';
import { useSubmit } from './effects/useSubmit';

export const CommonNormalForm = ({
  viewType,
  modelConfig,
  actionConfig,
}: any) => {
  const { formTitle } = actionConfig || {};
  console.log('formTitle:', formTitle);
  const { modelMetaData } = useModelMetaData({
    modelConfig,
  });
  const { mergeColumns } = useColumnsProp({
    modelMetaData,
  });
  const { onFinish } = useSubmit({
    modelConfig,
  });
  return (
    <BetaSchemaForm
      onFinish={onFinish}
      columns={mergeColumns}
      layoutType="Form"
      // grid
      // colProps={{
      //   span: 8,
      // }}
    />
  );
};
