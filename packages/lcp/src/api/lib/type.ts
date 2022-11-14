/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-10 15:52:10
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-11 15:01:47
 * @FilePath: /melodyLCP/packages/lcp/src/api/lib/type.ts
 * @Description: update here
 */

export interface CreateDBModelParams {
  modelSchema: Record<string, any>;
  definition?: any;
  modelName: string;
}

export interface DropCollectionParams {
  modelName: string;
}
