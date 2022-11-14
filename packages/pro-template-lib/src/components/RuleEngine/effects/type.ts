/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-22 17:11:44
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-26 17:46:38
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/components/RuleEngine/effects/type.ts
 * @Description: update here
 */

import { RULE_TREE_NODE_LOGIC_TYPES } from './const'

export interface RuleNodeValue {
  [key: string]: any
}

export type RULE_TREE_NODE_CONDITION_TYPE = 'RULE';

export interface RuleTreeDataCondition {
  type: RULE_TREE_NODE_CONDITION_TYPE,
  value: RuleNodeValue,
  tag: string,
}

export interface RuleTreeDataLogic{
  type: RULE_TREE_NODE_LOGIC_TYPES,
  children: (RuleTreeDataCondition|RuleTreeDataLogic) [],
  tag: string,
}

export type RuleTreeData = RuleTreeDataCondition | RuleTreeDataLogic

export type CreateOriginalRuleNode = (parentTag: string, index: number| string) => RuleTreeDataCondition

export interface AddTreeNode {
  (actionType: RULE_TREE_NODE_LOGIC_TYPES, parentNode: RuleTreeDataLogic, targetIndex: number):  void
  (actionType: RULE_TREE_NODE_LOGIC_TYPES, targetNode: RuleTreeDataCondition):  void
}

export interface DeleteTreeNode {
  (parentNode: RuleTreeDataLogic | RuleTreeDataCondition, targetIndex?: number):  void
}