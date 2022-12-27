/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 20:51:44
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 21:01:18
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/components/CommonNormalForm/effects/useSubmit.ts
 * @Description: update here
 */

import { message } from 'antd';
import { createRecordSingleByModel } from '../../../../sevice';
import { UseSubmitParams } from './type';

export const useSubmit = ({ modelConfig }: UseSubmitParams) => {
  const onFinish: (
    formData: Record<string, any>
  ) => Promise<boolean | void> = async (formData) => {
    if (!modelConfig?.mainModel) {
      message.error('缺失模型配置！');
      return false;
    }
    const result = await createRecordSingleByModel({
      modelName: modelConfig?.mainModel,
      data: formData,
    });
    const { success } = result || {};
    if (success) {
      message.success('创建成功！');
      return true;
    }
    return false;
  };
  return {
    onFinish,
  };
};
