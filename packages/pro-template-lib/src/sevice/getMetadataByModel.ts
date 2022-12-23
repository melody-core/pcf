import { xPost } from '../utils/xPost';
import { MetaDataResponse } from './type';

export const getMetadataByModel = ({ name }: { name: string }) => {
  return xPost<MetaDataResponse>(
    'http://localhost:3000/api/modelConfig/getMetaDataByModelName',
    {
      name,
    }
  );
};
