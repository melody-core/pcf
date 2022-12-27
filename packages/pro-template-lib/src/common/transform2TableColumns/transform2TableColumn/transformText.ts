import { transformCommon } from './transformCommon';
import { Transform2TableColumn } from './type';

export const transformText: Transform2TableColumn = ({ field }) => {
  const result = transformCommon({ field });
  const { config } = field || {};
  const { individualizedSetup } = config || {};
  const { defaultValue, maxLength } = individualizedSetup || {};
  result.fieldProps = {
    defaultValue: defaultValue || '',
    maxLength: maxLength,
  };
  return result;
};
