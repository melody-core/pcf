/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-22 19:33:32
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-10-08 17:22:58
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/components/RuleEngine/components/RuleTreeNode/type.ts
 * @Description: update here
 */


import { RULE_TREE_NODE_LOGIC_TYPES, RuleTreeDataLogic, RuleTreeData } from '../../effects'

import type { AddTreeNode, DeleteTreeNode } from '../../effects/type';


export interface RuleTreeNodeProps {
  parentNode?: RuleTreeDataLogic,
  targetIndex?: number
  targetNode: RuleTreeData
  modelFields: Record<string, any>[]
  addTreeNode: AddTreeNode
  deleteTreeNode: DeleteTreeNode
  updateTreeRender: () => void
}
