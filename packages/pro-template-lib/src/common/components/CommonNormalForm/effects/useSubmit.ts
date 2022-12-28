/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 20:51:44
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 19:08:59
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/components/CommonNormalForm/effects/useSubmit.ts
 * @Description: update here
 */

import { message } from 'antd';
import {
  createRecordSingleByModel,
  editRecordSingleById,
} from '../../../../sevice';
import { getSearchParams } from '../../../../utils';
import { UseSubmitParams } from './type';

export const useSubmit = ({ modelConfig, viewType }: UseSubmitParams) => {
  const onFinish: (
    formData: Record<string, any>
  ) => Promise<boolean | void> = async (formData) => {
    if (!modelConfig?.mainModel) {
      message.error('缺失模型配置！');
      return false;
    }
    if (viewType === 'create') {
      const result = await createRecordSingleByModel({
        modelName: modelConfig?.mainModel,
        data: formData,
      });
      const { success } = result || {};
      if (success) {
        message.success('创建成功！');
        return true;
      }
    }

    if (viewType === 'edit') {
      const { _id } = getSearchParams();
      if (!_id) {
        message.error('缺失recordId参数！');
        return;
      }
      const result = await editRecordSingleById({
        modelName: modelConfig?.mainModel,
        _id,
        data: formData,
      });
      const { success } = result || {};
      if (success) {
        message.success('更新成功！');
        return true;
      }
    }

    return false;
  };
  return {
    onFinish,
  };
};
