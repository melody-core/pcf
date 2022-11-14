/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-22 17:13:34
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-10-08 18:48:02
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/components/RuleEngine/effects/const.ts
 * @Description: update here
 */

import { RULE_TREE_NODE_CONDITION_TYPE } from './type'


// 逻辑组类型枚举
export enum RULE_TREE_NODE_LOGIC_TYPES {
  AND = "AND",
  OR = "OR",
}

// 条件初始实例
export const RULE_TREE_DATA_ORIGINAL_VALUE = {
  tag: '条件',
  type: 'RULE' as RULE_TREE_NODE_CONDITION_TYPE,
  value: {}
}

// 枚举字段类型
export enum MODEL_FIELD_TYPES {
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  TYPE = 'TYPE',
  TEXT = 'TEXT',
}
// 条件实例逻辑符号枚举
export enum LOGICAL_SYMBOLS {
  NULL = 'NULL',  // 是空
  NONEMPTY = 'NONEMPTY', // 非空
  BEFORE = 'BEFORE',  // 早于
  AFTER = 'AFTER',   // 晚于
  BELONG = 'BELONG',  // 属于
  OTHER = 'OTHER',  // 不属于
  INCLUDE = 'INCLUDE',  // 包含
  EXCLUDING = 'EXCLUDING', // 不包含
  LARGER = 'LARGER', // 大于
  LESS = 'LESS', // 小于
  EQUAL = 'EQUAL', // 等于
  NEQ = 'NEQ', // 不等于
  GE = 'GE', // 大于等于
  LE = 'LE', // 小于等于
  BETWEEN = 'BETWEEN', // 介于
  IS = 'IS', // 是
  NOT = 'NOT' // 不是
}

// 逻辑符分组集合 - start
// 数字类型逻辑符常规集合
export const NUMBER_LOGICAL_SYMBOL_SET = new Set([LOGICAL_SYMBOLS.LARGER, LOGICAL_SYMBOLS.GE, LOGICAL_SYMBOLS.LESS, LOGICAL_SYMBOLS.LE, LOGICAL_SYMBOLS.EQUAL, LOGICAL_SYMBOLS.NEQ, LOGICAL_SYMBOLS.BETWEEN]);
// 值所属类型逻辑符常规集合
export const VALUE_LOGIC_SYMBOL_SET = new Set([LOGICAL_SYMBOLS.BELONG, LOGICAL_SYMBOLS.OTHER, LOGICAL_SYMBOLS.INCLUDE, LOGICAL_SYMBOLS.EXCLUDING]);
// 日期类型逻辑符常规集合
export const DATE_LOGIC_SYMBOL_SET = new Set([LOGICAL_SYMBOLS.BEFORE, LOGICAL_SYMBOLS.AFTER]);
// 值文本类型逻辑符常规集合
export const TEXT_LOGIC_SYMBOL_SET = new Set([LOGICAL_SYMBOLS.IS, LOGICAL_SYMBOLS.NOT]);
// 空值检测逻辑符常规集合
export const NULL_LOGIC_SYMBOL_SET = new Set([LOGICAL_SYMBOLS.NULL, LOGICAL_SYMBOLS.NONEMPTY]);
// 逻辑符分组集合 - end

// 字段类型对应逻辑符组的映射
export const LOGIC_SYMBOL_MAPPING = new Map()
  .set(MODEL_FIELD_TYPES.DATE, new Set([...DATE_LOGIC_SYMBOL_SET, ...NULL_LOGIC_SYMBOL_SET]))
  .set(MODEL_FIELD_TYPES.NUMBER, new Set([...NUMBER_LOGICAL_SYMBOL_SET]))
  .set(MODEL_FIELD_TYPES.TYPE, new Set([...VALUE_LOGIC_SYMBOL_SET, ...NULL_LOGIC_SYMBOL_SET]))
  .set(MODEL_FIELD_TYPES.TEXT, new Set([...TEXT_LOGIC_SYMBOL_SET, ...NULL_LOGIC_SYMBOL_SET]))


// 逻辑符组的options定义
export const LOGICAL_SYMBOL_OPTIONS = [{
  value: LOGICAL_SYMBOLS.NULL,
  label: '是空',
}, {
  value: LOGICAL_SYMBOLS.NONEMPTY,
  label: '非空',
}, {
  value: LOGICAL_SYMBOLS.BEFORE,
  label: '早于',
}, {
  value: LOGICAL_SYMBOLS.AFTER,
  label: '晚于'
}, {
  value: LOGICAL_SYMBOLS.BELONG,
  label: '属于',
}, {
  value: LOGICAL_SYMBOLS.OTHER,
  label: '不属于',
}, {
  value: LOGICAL_SYMBOLS.INCLUDE,
  label: '包括',
}, {
  value: LOGICAL_SYMBOLS.EXCLUDING,
  label: '不包括',
}, {
  value: LOGICAL_SYMBOLS.LARGER,
  label: '大于',
}, {
  value: LOGICAL_SYMBOLS.GE,
  label: '大于等于',
}, {
  value: LOGICAL_SYMBOLS.LESS,
  label: '小于',
}, {
  value: LOGICAL_SYMBOLS.LE,
  label: '小于等于',
}, {
  value: LOGICAL_SYMBOLS.EQUAL,
  label: '等于',
}, {
  value: LOGICAL_SYMBOLS.NEQ,
  label: '不等于',
}, {
  value: LOGICAL_SYMBOLS.BETWEEN,
  label: '介于'
}, {
  value: LOGICAL_SYMBOLS.IS,
  label: '值为',
}, {
  value: LOGICAL_SYMBOLS.NOT,
  label: '值不为',
}]

// 逻辑填充方式枚举
export enum LOGIC_WAYS {
  SELECT_VALUE = 'SELECT_VALUE', // 选择值
  FILL_VALUE = 'FILL_VALUE', // 填写值
  DATE_FIELD = 'DATE_FIELD', // 日期字段
  DATE_PARAMETER = 'DATE_PARAMETER', // 日期参数
  DATE_FIXED = 'DATE_FIXED',  // 固定日期
  INPUT_DIGIT = 'INPUT_DIGIT', // 输入数值
  SELECT_DIGIT_FIELD = 'SELECT_DIGIT_FIELD', // 选择数值字段
  
}
// 逻辑填充方式options
export const LOGIC_WAY_OPTIONS = [{
  value: LOGIC_WAYS.SELECT_VALUE,
  label: '选择值',
}, {
  value: LOGIC_WAYS.FILL_VALUE,
  label: '填写值',
}, {
  value: LOGIC_WAYS.DATE_FIELD,
  label: '日期字段',
}, {
  value: LOGIC_WAYS.DATE_PARAMETER,
  label: '日期参数',
}, {
  value: LOGIC_WAYS.DATE_FIXED,
  label: '固定日期',
}, {
  value: LOGIC_WAYS.INPUT_DIGIT,
  label: '输入数值',
}, {
  value: LOGIC_WAYS.SELECT_DIGIT_FIELD,
  label: '选择数值字段',
}]

// 方式分组集合 - start
// 数字类型集合
export const NUMBER_LOGICAL_WAY_SET = new Set([LOGIC_WAYS.INPUT_DIGIT, LOGIC_WAYS.SELECT_DIGIT_FIELD]);
// 日期类型集合
export const DATE_LOGICAL_WAY_SET = new Set([LOGIC_WAYS.DATE_FIELD, LOGIC_WAYS.DATE_FIXED, LOGIC_WAYS.DATE_PARAMETER]);
// 值所属类型类型集合
export const VALUE_LOGICAL_WAY_SET = new Set([LOGIC_WAYS.FILL_VALUE, LOGIC_WAYS.SELECT_VALUE]);
// 方式分组集合 - end


// 逻辑符对应的方式组
export const LOGIC_SYMBOL_WAY_MAP = new Map()
  .set(NUMBER_LOGICAL_SYMBOL_SET, NUMBER_LOGICAL_WAY_SET)
  .set(DATE_LOGIC_SYMBOL_SET, DATE_LOGICAL_WAY_SET)
  .set(VALUE_LOGIC_SYMBOL_SET, VALUE_LOGICAL_WAY_SET)

