/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-15 20:01:11
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 23:10:19
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/components/TableField/TableFieldEdit.tsx
 * @Description: update here
 */

import { EditableProTable } from '@ant-design/pro-components';
import { useFieldEditColumns } from './effects';

export const TableFieldEdit = ({
  value,
  onChange,
  individualizedSetup,
  formRef,
  ...rest
}: any) => {
  const { columns } = useFieldEditColumns({
    formRef,
    individualizedSetup,
  });
  return (
    <EditableProTable
      showHeader={false}
      recordCreatorProps={{
        record: { id: (Math.random() * 1000000).toFixed(0) },
      }}
      search={false}
      editable={{}}
      options={false}
      onChange={console.log}
      columns={columns}
    />
  );
};
