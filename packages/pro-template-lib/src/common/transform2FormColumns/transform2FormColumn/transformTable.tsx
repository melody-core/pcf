/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-15 20:00:30
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-17 01:08:12
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/transform2FormColumns/transform2FormColumn/transformTable.tsx
 * @Description: update here
 */
/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-14 16:17:16
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-14 19:20:34
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/transform2FormColumns/transform2FormColumn/transfromVideo.tsx
 * @Description: update here
 */
import { TableFieldEdit, TableFieldRead } from '../../components';
import { transformCommon } from './transformCommon';
import { Transform2FormColumn } from './type';

export const transformTable: Transform2FormColumn = ({
  field,
  formRef,
  metaData,
}) => {
  const result = transformCommon({ field, metaData });
  const { config } = field || {};
  const { individualizedSetup } = config || {};
  // const { linkTableFields } = individualizedSetup || {};
  //   result.fieldProps = {
  //     min: minValue,
  //     max: maxValue,
  //   };
  result.renderFormItem = (schema, config, other) => {
    return (
      <TableFieldEdit
        {...(schema?.fieldProps || {})}
        {...config}
        metaData={metaData}
        formRef={formRef}
        individualizedSetup={individualizedSetup}
      />
    );
  };
  result.render = (_value, props) => {
    return (
      <TableFieldRead
        {...props}
        metaData={metaData}
        formRef={formRef}
        individualizedSetup={individualizedSetup}
      />
    );
  };
  return result;
};
