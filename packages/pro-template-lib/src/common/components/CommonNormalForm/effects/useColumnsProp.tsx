/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 19:16:37
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-28 18:27:32
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/components/CommonNormalForm/effects/useColumnsProp.tsx
 * @Description: update here
 */

import { ProFormColumnsType } from '@ant-design/pro-components';
import { useEffect, useState } from 'react';
import { transform2FormColumns } from '../../../../common';
import { UseColumnsPropParams } from './type';

export const useColumnsProp = ({
  modelMetaData,
  viewType,
}: UseColumnsPropParams) => {
  const [mergeColumns, setColumns] = useState<
    ProFormColumnsType<Record<string, any>, 'text'>[]
  >([]);
  useEffect(() => {
    if (!modelMetaData?.name) {
      return;
    }
    const columns = transform2FormColumns(modelMetaData.fields);
    if (viewType === 'detail') {
      columns.forEach((column) => {
        column.proFieldProps = {
          ...(column.proFieldProps || {}),
          mode: 'read',
        };
      });
    }
    setColumns(columns);
  }, [modelMetaData]);
  return {
    mergeColumns,
  };
};
