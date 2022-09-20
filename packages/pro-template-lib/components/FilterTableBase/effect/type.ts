/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-14 17:41:50
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-16 13:59:25
 * @FilePath: /todoweb/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/components/FilterTableBase/effect/type.ts
 * @Description: XtableBase的属性封装处理, 做任何改动请先通知@六弦。
 */

import {
  ActionType,
  BaseQueryFilterProps,
  ParamsType,
  ProColumns,
  ProFormColumnsType,
  RequestData,
  RowEditableConfig,
} from '@ant-design/pro-components';
import { NewLineConfig, RecordKey } from '@ant-design/pro-utils/lib/useEditableArray';
import { TablePaginationConfig } from 'antd';
import { GetRowKey, SortOrder } from 'antd/lib/table/interface';
import { ReactNode } from 'react';

// common-types
export type RowKey = string | GetRowKey<Record<any, any>>;

// other-built-in-hook-type
/**
 * use-addRecordWrap-hook-all
 * @desc: 控制“新增”的容器展示，抽屉？弹窗？
 */
export type UpdateAddRecordWrap = (isShow: boolean) => void;
/**
 * use-addRecordWrap-hook-params
 */
export interface UseAddRecordWrap {
  (): {
    addRecordWrapVisible: boolean;
    setAddRecordWrap: UpdateAddRecordWrap;
  };
}

export type FormTypeWithOutStepsForm =
  | 'Embed'
  | 'Form'
  | 'DrawerForm'
  | 'ModalForm'
  | 'QueryFilter'
  | 'LightFilter'
  | 'StepForm';

export type FormType =
  | 'Embed'
  | 'Form'
  | 'DrawerForm'
  | 'ModalForm'
  | 'QueryFilter'
  | 'LightFilter'
  | 'StepForm'
  | 'StepsForm';

export interface recordStepsFormStep {
  description?: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  status?: 'wait' | 'process' | 'finish' | 'error';
  title?: string;
  columns: string[];
}
export interface UseAddRecordFormParams {
  columns?: Array<ProColumns<Record<any, any>>>;
  recordFormType?: FormType;
  steps?: recordStepsFormStep[];
}
export interface UseAddRecordStepsFormParams {
  columns?: Array<ProColumns<Record<any, any>>>;
  recordFormType?: 'StepsForm';
  steps?: recordStepsFormStep[];
}
export interface UseAddRecordForm {
  (arg: UseAddRecordStepsFormParams): {
    mergeRecordFormType: 'StepsForm';
    mergeRecordFormColumns: Array<Array<ProFormColumnsType<Record<any, any>, 'text'>>>;
  };
  (arg: UseAddRecordFormParams): {
    mergeRecordFormType: FormTypeWithOutStepsForm;
    mergeRecordFormColumns: Array<ProFormColumnsType<Record<any, any>, 'text'>>;
  };
}

// prop-editable-hooks-types
export type EditableProp = RowEditableConfig<Record<any, any>>;
export type AutoLineEditOnSave = (
  key: RecordKey,
  record: Record<any, any> & {
    index?: number | undefined;
  },
  originRow: Record<any, any> & {
    index?: number | undefined;
  },
  newLineConfig?: NewLineConfig<Record<any, any>>,
) => Promise<any>;

export type AutoLineEditOnDelete = (
  key: RecordKey,
  row: Record<any, any> & {
    index?: number | undefined;
  },
) => Promise<any>;
/**
 * @desc: prop-editable-hooks-params
 */

export type TableSourceRequest = (
  params: ParamsType & {
    pageSize?: number | undefined;
    current?: number | undefined;
    keyword?: string | undefined;
  },
  sort: Record<string, SortOrder>,
  filter: Record<string, React.ReactText[] | null>,
) => Promise<Partial<RequestData<Record<any, any>>>>;
export interface UseEditablePropParams {
  editable?: EditableProp;
  actionRef?: React.MutableRefObject<ActionType | undefined>;
  request?: TableSourceRequest;
  autoRowEditConfig?: {
    onSave?: AutoLineEditOnSave;
    onDelete?: AutoLineEditOnDelete;
  };
}
/**
 * @desc: prop-editable-hooks
 */
export type UseEditableProp = (o: UseEditablePropParams) => EditableProp | undefined;

// prop-pagination-hooks-types
/**
 * @desc: prop-pagination-hooks-params
 */
export interface UsePaginationPropParams {
  pagination?: false | TablePaginationConfig;
}
/**
 * @desc: prop-pagination-hooks
 */
export type UsePaginationProp = (
  o: UsePaginationPropParams,
) => false | TablePaginationConfig | undefined;

// prop-search-hooks-types
/**
 * @desc: prop-search-hooks-params
 */
export interface UseSearchPropParams {
  search?:
    | false
    | (BaseQueryFilterProps & {
        filterType?: 'query' | 'light';
      });
}
/**
 * @desc: prop-search-hooks
 */
export type UseSearchProp = (o: UseSearchPropParams) =>
  | false
  | (BaseQueryFilterProps & {
      filterType?: 'query' | 'light';
    })
  | undefined;

// prop-toolBarRender-hooks-types
export type OpenType = 'drawer' | 'modal';
/**
 * @desc: prop-toolBarRender-hooks-params
 */
export interface UseToolBarRenderPropParams {
  toolBarRender?:
    | false
    | ((
        action: ActionType | undefined,
        rows: {
          selectedRowKeys?: Array<string | number> | undefined;
          selectedRows?: Array<Record<any, any>> | undefined;
        },
      ) => React.ReactNode[]);
  autoAddRecordConfig?: {
    onAddBtnClick?: () => any;
    onSave: (record: Record<string, any>) => PromiseLike<any>;
    [key: string]: any;
  };
  setAddRecordWrap: UpdateAddRecordWrap;
  addRecordWrapVisible: boolean;
}
/**
 * @desc: prop-toolBarRender-hooks
 */
export type UseToolBarRenderProp = (o: UseToolBarRenderPropParams) =>
  | false
  | ((
      action: ActionType | undefined,
      rows: {
        selectedRowKeys?: Array<string | number> | undefined;
        selectedRows?: Array<Record<any, any>> | undefined;
      },
    ) => React.ReactNode[])
  | undefined;

// prop-columns-hooks-types
/**
 * @desc: prop-columns-hook-params
 */
export interface UseColumnsPropParams {
  columns?: Array<ProColumns<Record<any, any>, 'text'>>;
  autoRowEditConfig?: {
    onSave?: AutoLineEditOnSave;
    onDelete?: AutoLineEditOnDelete;
  };
  rowKey?: RowKey;
}
/**
 * @desc: prop-columns-hooks
 */
export type UseColumnsProp = (
  o: UseColumnsPropParams,
) => Array<ProColumns<Record<any, any>, 'text'>> | undefined;

// prop-rowKey-hooks-types
/**
 * @desc: prop-rowKey-hooks-params
 */
export interface UseRowKeyPropParams {
  rowKey?: RowKey;
}
/**
 * @desc: prop-rowKey-hook
 */
export type UseRowKeyProp = (o: UseRowKeyPropParams) => RowKey | 'id';
