/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-17 01:06:10
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-17 01:51:36
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/components/TableField/TableFieldRead.tsx
 * @Description: update here
 */
import { ProTable } from '@ant-design/pro-components';
import { useFieldEditColumns } from './effects';

export const TableFieldRead = ({
  value,
  onChange,
  individualizedSetup,
  formRef,
  metaData,
  cuFormData,
}: any) => {
  const cuFormValue = cuFormData || formRef?.current?.getFieldsValue();
  const { columns } = useFieldEditColumns({
    formRef,
    individualizedSetup,
    metaData,
    cuFormValue,
  });
  console.log('columns:', columns);
  console.log('value:', value);
  return (
    <ProTable
      // showHeader={false}
      rowKey="_id"
      dataSource={value || []}
      search={false}
      editable={{}}
      pagination={false}
      options={false}
      columns={columns}
    />
  );
};
