/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 12:18:16
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-27 18:52:27
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/transform2FormColumns/transform2FormColumn/transformSelect.ts
 * @Description: update here
 */
import { getRecordsByModel } from '../../../sevice';
import { transformCommon } from './transformCommon';
import { Transform2FormColumn } from './type';

export const transformSelect: Transform2FormColumn = ({ field }) => {
  const result = transformCommon({ field });
  const { config } = field || {};
  const { individualizedSetup } = config || {};
  const {
    isMultiple,
    selectType,
    enumOptions,
    relationModel,
    relationShowField,
  } = individualizedSetup || {}; // 个性化配置
  if (selectType === 'ENUM') {
    result.fieldProps = {
      options: enumOptions || [],
    };
    if (isMultiple) {
      result.fieldProps = {
        ...result.fieldProps,
        mode: 'multiple',
        allowClear: true,
      };
    }
  }
  if (selectType === 'RELATION') {
    result.request = async () => {
      if (!relationModel) {
        return [];
      }
      const res = await getRecordsByModel({
        modelName: relationModel,
        params: {
          pageSize: 999,
        },
        sort: {},
      });
      const { success, data } = res;
      if (success) {
        return (
          data?.data?.map?.((item) => ({
            label: item[relationShowField],
            value: item._id,
          })) || []
        );
      }
      return [];
    };
    result.fieldProps = {
      showSearch: true,
    };
    if (isMultiple) {
      result.fieldProps = {
        ...result.fieldProps,
        mode: 'multiple',
        allowClear: true,
      };
    }
  }
  return result;
};
