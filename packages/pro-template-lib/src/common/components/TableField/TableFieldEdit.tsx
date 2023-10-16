/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-15 20:01:11
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-17 01:39:19
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
  metaData,
  ...rest
}: any) => {
  const cuFormValue = formRef?.current?.getFieldsValue();
  const { columns } = useFieldEditColumns({
    formRef,
    cuFormValue,
    individualizedSetup,
    metaData,
  });
  console.log('value:', value, columns);
  return (
    <EditableProTable
      // showHeader={false}
      rowKey="_id"
      recordCreatorProps={{
        record: () => ({ _id: (Math.random() * 1000000).toFixed(0) }),
      }}
      value={value || []}
      onChange={onChange}
      search={false}
      editable={{}}
      options={false}
      columns={
        columns?.length
          ? [
              ...columns,
              {
                title: '操作',
                valueType: 'option',
                width: 200,
                render: (text, record, _, action) => [
                  <a
                    key="editable"
                    onClick={() => {
                      action?.startEditable?.(record._id);
                    }}
                  >
                    编辑
                  </a>,
                  <a
                    key="delete"
                    onClick={() => {
                      onChange(
                        value?.filter((item: any) => item._id !== record._id)
                      );
                    }}
                  >
                    删除
                  </a>,
                ],
              },
            ]
          : []
      }
    />
  );
};
