/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-14 16:17:16
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-14 19:20:34
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/transform2FormColumns/transform2FormColumn/transfromVideo.tsx
 * @Description: update here
 */
import { VideoFieldEdit, VideoFieldRead } from '../../components';
import { transformCommon } from './transformCommon';
import { Transform2FormColumn } from './type';

export const transformVideo: Transform2FormColumn = ({ field }) => {
  const result = transformCommon({ field });
  const { config } = field || {};
  const { individualizedSetup } = config || {};
  const { maxCount } = individualizedSetup || {};
  //   result.fieldProps = {
  //     min: minValue,
  //     max: maxValue,
  //   };
  result.renderFormItem = (schema, config, other) => (
    <VideoFieldEdit
      {...(schema?.fieldProps || {})}
      maxCount={maxCount}
      {...config}
    />
  );
  result.render = (_value, props) => {
    return <VideoFieldRead {...props} />;
  };
  return result;
};
