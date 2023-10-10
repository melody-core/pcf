import { transformCommon } from './transformCommon';
import { Transform2FormColumn } from './type';

export const transformDate: Transform2FormColumn = ({ field }) => {
  const result = transformCommon({ field });
  //   const { config } = field || {};
  //   const { individualizedSetup } = config || {};
  return result;
};
