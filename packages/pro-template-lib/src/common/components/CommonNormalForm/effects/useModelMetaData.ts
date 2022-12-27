/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 19:16:50
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 20:39:50
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/components/CommonNormalForm/effects/useModelMetaData.ts
 * @Description: update here
 */

import { message } from 'antd';
import { useEffect, useState } from 'react';
import { getMetadataByModel } from '../../../../sevice';
import { MetaDataResponse } from '../../../../sevice/type';
import { UseMetaDataParams } from './type';

export const useModelMetaData = ({ modelConfig }: UseMetaDataParams) => {
  const { mainModel } = modelConfig || {};
  const [modelMetaData, setMetaData] = useState<MetaDataResponse | null>(null);
  useEffect(() => {
    if (!mainModel) {
      message.error('未进行页面的模型数据配置!');
      return;
    }
    getMetadataByModel({
      name: mainModel,
    }).then((res) => {
      const { success, data } = res;
      if (success) {
        setMetaData(data);
      }
    });
  }, []);
  return {
    modelMetaData,
  };
};
