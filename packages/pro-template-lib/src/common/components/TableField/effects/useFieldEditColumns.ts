/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-15 20:30:16
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 23:21:44
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/components/TableField/effects/useFieldEditColumns.ts
 * @Description: update here
 */

import { ProColumns } from '@ant-design/pro-components';

export const useFieldEditColumns = ({ formRef, individualizedSetup }: any) => {
  const cuFormValue = formRef?.current?.getFieldsValue();
  const { linkTableFields, enumTableFields } = individualizedSetup || {};
  const resColumns: ProColumns<Record<string, any>, 'text'>[] = [];
  if (!cuFormValue) {
    return {
      columns: resColumns,
    };
  }
  console.log('individualizedSetup', individualizedSetup, cuFormValue);
  linkTableFields?.forEach((itemKey: any, index) => {
    const values = cuFormValue[itemKey];
    // resColumns.push({
    //   valueType: "select",
    //   dataIndex: `${itemKey} + `

    // });
  });
  enumTableFields?.forEach((item: any) => {
    resColumns.push({
      valueType: item.valueType,
      title: item.title,
      dataIndex: item.key,
    });
  });
  return {
    columns: resColumns,
  };
};
