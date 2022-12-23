/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 00:53:35
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 02:16:35
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/sevice/type.ts
 * @Description: update here
 */

export interface FieldSingleConfig {
  commonSetup: {
    isRequired: true;
    isUnique: false;
    isEditable: true;
    desc?: string;
  };
  individualizedSetup: Record<string, any>;
}

export interface FieldSingleMeta {
  config: FieldSingleConfig;
  type: any;
  fieldName: string;
  title: string;
}

export interface MetaDataResponse {
  _id: string;
  name: string;
  title: string;
  desc: string;
  fields: FieldSingleMeta[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
