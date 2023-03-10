import { ProColumns } from '@ant-design/pro-components';
import { transformCommon } from './transformCommon';
import { Transform2TableColumn } from './type';

export const transformDigit: Transform2TableColumn = ({ field }) => {
  const result = transformCommon({ field });
  const { config } = field || {};
  const { individualizedSetup } = config || {};
  const { minValue, maxValue } = individualizedSetup || {};
  result.fieldProps = {
    min: minValue,
    max: maxValue,
  };
  return result;
};
