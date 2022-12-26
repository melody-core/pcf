/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-26 12:18:16
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 13:26:19
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/common/transform2TableColumns/transform2TableColumn/transformSelect.ts
 * @Description: update here
 */
import { ProColumns } from '@ant-design/pro-components';
import { getRecordsByModel } from '../../../sevice';
import { Transform2TableColumn } from './type';

export const transformSelect: Transform2TableColumn = ({ field }) => {
  const { title, type, fieldName, config } = field;
  const { commonSetup, individualizedSetup } = config || {};
  const { desc } = commonSetup || {};
  const {
    isMultiple,
    selectType,
    enumOptions,
    relationModel,
    relationShowField,
  } = individualizedSetup || {}; // 个性化配置
  const result: ProColumns<Record<string, any>, 'text'> = {
    valueType: type,
    title,
    dataIndex: fieldName,
    tooltip: desc || undefined,
  };
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
