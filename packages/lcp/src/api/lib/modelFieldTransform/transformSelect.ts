/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-25 22:37:59
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-26 13:25:39
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/api/lib/modelFieldTransform/transformSelect.ts
 * @Description: update here
 */
import { ModelFieldTransformFn } from "./type";

export const transformSelect: ModelFieldTransformFn = async ({ config }) => {
  const { commonSetup, individualizedSetup } = config || {};
  const { isRequired = true, isUnique = false } = commonSetup || {};
  const {
    isMultiple,
    selectType,
    enumOptions,
    relationModel,
    // relationShowField,
  } = individualizedSetup || {}; // 个性化配置

  const dbFieldConfig: Record<string, any> = {
    type: String,
    required: isRequired,
    unique: isUnique,
  };

  // 枚举
  if (selectType === "ENUM") {
    if (isMultiple) {
      dbFieldConfig.type = [String];
    }
    dbFieldConfig.enum = (enumOptions || []).map((item) => item.value);
  }
  // 关联
  if (selectType === "RELATION") {
    dbFieldConfig.type = String;
    if (isMultiple) {
      dbFieldConfig.type = [String];
    }
    dbFieldConfig.populate = relationModel;
  }

  return {
    dbFieldConfig,
  };
};
