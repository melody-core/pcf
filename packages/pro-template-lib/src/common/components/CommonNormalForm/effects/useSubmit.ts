/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 20:51:44
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-01-31 17:39:33
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/components/CommonNormalForm/effects/useSubmit.ts
 * @Description: update here
 */

import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  createRecordSingleByModel,
  editRecordSingleById,
} from '../../../../sevice';
import { getSearchParams } from '../../../../utils';
import { UseSubmitParams } from './type';

export const useSubmit = ({ modelConfig, viewType }: UseSubmitParams) => {
  const navigate = useNavigate();
  const onFinish: (
    formData: Record<string, any>
  ) => Promise<boolean | void> = async (formData) => {
    if (!modelConfig?.mainModel) {
      message.error('缺失模型配置！');
      return false;
    }
    if (viewType === 'detail') {
      navigate(`${location.pathname.replace('/detail', '/list')}`);
    }
    if (viewType === 'create') {
      const result = await createRecordSingleByModel({
        modelName: modelConfig?.mainModel,
        data: formData,
      });
      const { success } = result || {};
      if (success) {
        message.success('创建成功！');
        navigate(`${location.pathname.replace('/create', '/list')}`);
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
        navigate(`${location.pathname.replace('/edit', '/list')}`);
        return true;
      }
    }

    return false;
  };
  return {
    onFinish,
  };
};
