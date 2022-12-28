/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-28 18:36:00
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 18:52:01
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/components/CommonNormalForm/effects/useInitValue.ts
 * @Description: update here
 */

import { useEffect } from 'react';
import { getRecordDetailById } from '../../../../sevice';
import { getSearchParams } from '../../../../utils';
import { UseInitValueParams } from './type';

export const useInitValue = ({
  viewType,
  formRef,
  modelConfig,
}: UseInitValueParams) => {
  useEffect(() => {
    const { mainModel } = modelConfig || {};
    if (viewType !== 'create') {
      const { _id } = getSearchParams();
      if (!_id || !mainModel) {
        return;
      }
      getRecordDetailById({
        modelName: mainModel,
        _id,
      }).then((res) => {
        const { success, data } = res || {};
        if (success) {
          formRef.current?.setFieldsValue?.(data);
        }
      });
    }
  }, []);
};
