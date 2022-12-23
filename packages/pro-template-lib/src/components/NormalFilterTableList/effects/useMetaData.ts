/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 01:14:10
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 01:20:08
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/components/NormalFilterTableList/effects/useMetaData.ts
 * @Description: update here
 */

import { message } from 'antd';
import { useEffect, useState } from 'react';
import { getMetadataByModel } from '../../../sevice';
import { MetaDataResponse } from '../../../sevice/type';
import { UseMetaDataParams } from './type';

export const useMetaData = ({ modelConfig }: UseMetaDataParams) => {
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
