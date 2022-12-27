import { xPost } from '../utils/xPost';
import { MetaDataResponse } from './type';

export const getMetadataByModel = ({ name }: { name: string }) => {
  return xPost<MetaDataResponse>('/api/modelConfig/getMetaDataByModelName', {
    name,
  });
};
