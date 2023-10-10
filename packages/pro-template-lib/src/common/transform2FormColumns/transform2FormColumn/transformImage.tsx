import { ImageFieldEdit, ImageFieldRead } from '../../components';
import { transformCommon } from './transformCommon';
import { Transform2FormColumn } from './type';

console.log('ImageField:', ImageFieldEdit);

export const transformImage: Transform2FormColumn = ({ field }) => {
  const result = transformCommon({ field });
  //   const { config } = field || {};
  //   const { individualizedSetup } = config || {};
  //   const { minValue, maxValue } = individualizedSetup || {};
  //   result.fieldProps = {
  //     min: minValue,
  //     max: maxValue,
  //   };
  result.renderFormItem = (schema, config, other) => (
    <ImageFieldEdit {...(schema?.fieldProps || {})} {...config} />
  );
  result.render = (_value, props) => {
    return <ImageFieldRead {...props} />;
  };
  return result;
};
