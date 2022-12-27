import { transformCommon } from './transformCommon';
import { Transform2FormColumn } from './type';

export const transformDigit: Transform2FormColumn = ({ field }) => {
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
