/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 09:55:54
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-05 11:36:12
 * @FilePath: /melodyLCP/packages/lcp/src/api/types/effect.ts
 * @Description: update here
 */

// 页面基本信息
export interface PageBaseConfig {
  title?: string;
  type?: string;
  desc?: string;
  router?: string;
}

// 页面代理配置 - 默认继承项目本身
export interface PageReqProxy {
  key: string;
  value: string;
  rewrite?: string;
  changeOrigin?: string;
}

// 页面高级信息
export interface PageSeniorConfig {
  proxy?: PageReqProxy;
}

// 页面数据-模型配置单项
export interface PageDataModelConfig {
  id: string;
  nameSpace?: string;
  type?: string;
}

// 页面数据-自定义配置单项
export interface PageDataCustomConfig {
  type?: string;
  custom: string;
}

// 页面

export interface PageDataConfig {
  model?: PageDataModelConfig[];
  custom?: PageDataCustomConfig[];
}

export type PageEffectConfig = PageDataConfig & Record<string, any>;

export type PageConfig = PageBaseConfig & PageSeniorConfig & PageEffectConfig;
