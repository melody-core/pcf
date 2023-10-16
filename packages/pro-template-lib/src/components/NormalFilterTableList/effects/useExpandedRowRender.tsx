/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-17 01:21:53
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-17 01:51:58
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/components/NormalFilterTableList/effects/useExpandedRowRender.tsx
 * @Description: update here
 */

import { ExpandableConfig } from 'antd/lib/table/interface';
import { UseExpandedParams } from './type';
import { TableFieldRead } from '../../../common/components';

export const useExpandedRowRender = ({
  modelMetaData,
}: UseExpandedParams): ExpandableConfig<Record<string, any>> | undefined => {
  const { fields } = modelMetaData || {};
  const targetField = fields?.find((field) => field.type === 'table');
  if (!targetField) {
    return undefined;
  }
  const expandedRowRender = (cuFormData: any) => {
    return (
      <div style={{ padding: '10px' }}>
        <TableFieldRead
          cuFormData={cuFormData}
          individualizedSetup={targetField.config.individualizedSetup}
          metaData={modelMetaData}
          value={cuFormData[targetField.fieldName]}
        />
      </div>
    );
  };
  return {
    expandedRowRender,
  };
};
