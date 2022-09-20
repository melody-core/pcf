/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-14 15:08:36
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-16 13:57:37
 * @FilePath: /todoweb/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/components/FilterTableBase/type.ts
 * @Description: update here
 */

import { ParamsType, ProTableProps } from '@ant-design/pro-components';
import {
  AutoLineEditOnDelete,
  AutoLineEditOnSave,
  FormType,
  recordStepsFormStep,
} from './effect/type';

export interface XTableBaseEProps {
  /** 自动化行内容编辑配置。开启此功能后，表格自带操作栏列。需配置行内容编辑后保存和删除的请求函数，配合request属性使用。运行此函数后，列表会自动重载, 回显数据 */
  autoRowEditConfig?: {
    onSave?: AutoLineEditOnSave;
    onDelete?: AutoLineEditOnDelete;
  };
  /** 自动化新增内容配置。开启此功能， 表格自带强大的新增功能。需配置新增确认后的请求函数。 */
  autoAddRecordConfig?: {
    onAddBtnClick?: () => any;
    onSave: (record: Record<string, any>) => PromiseLike<any>;
    recordFormType?: FormType;
    steps?: recordStepsFormStep[];
    formTitle?: string;
  };
}

export type XTableBaseProps = XTableBaseEProps &
  ProTableProps<Record<any, any>, ParamsType, 'text'>;
