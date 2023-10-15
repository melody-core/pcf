/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-15 20:01:11
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 20:32:07
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/components/TableField/TableFieldEdit.tsx
 * @Description: update here
 */

import { ProTable } from '@ant-design/pro-components';

export const TableFieldEdit = ({
  value,
  onChange,
  individualizedSetup,
  formRef,
  ...rest
}: any) => {
  console.log(rest);
  const {} = individualizedSetup || {};
  return (
    <ProTable
      showHeader={false}
      search={false}
      editable={{}}
      onChange={console.log}
    />
  );
};
