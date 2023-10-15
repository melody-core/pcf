/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-15 20:30:16
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 20:35:02
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/components/TableField/effects/useFieldEditColumns.ts
 * @Description: update here
 */

export const useFieldEditColumns = ({ formRef, linkTableFields }: any) => {
  const cuFormValue = formRef?.current?.getFieldsValue();
  const resColumns = [];
  if (!cuFormValue) {
    return resColumns;
  }
  linkTableFields?.forEach((itemKey: any) => {
    const values = cuFormValue[itemKey];
    resColumns.push({
      valueType: '',
    });
  });
};
