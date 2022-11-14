/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-22 16:31:35
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-10-08 17:22:41
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/components/RuleEngine/index.tsx
 * @Description: update here
 */

import { FC, forwardRef, ForwardedRef } from 'react'
import { Button, Tag } from 'antd';
import { RuleTreeNode } from './components'
import { useRuleTreeData } from './effects'

import type { RuleEngineProps, RuleEngineRef } from './type'

import styles from './index.module.less';

export const RuleEngine = forwardRef<RuleEngineRef, RuleEngineProps>(({
  modelFields
}, ref) => {
  const { ruleTreeData, addTreeNode, deleteTreeNode, initTreeData, updateTreeRender } = useRuleTreeData();
  // ui
  console.log('ruleTreeData', ruleTreeData)
  return (
    <div className={styles['rule_engine_wrap']}>
      {ruleTreeData ? (
        <RuleTreeNode updateTreeRender={updateTreeRender} modelFields={modelFields} targetNode={ruleTreeData} addTreeNode={addTreeNode} deleteTreeNode={deleteTreeNode}/>
      ) : (
        <div><Button type="primary" onClick={initTreeData}>开始创建条件</Button></div>
      )}
    </div>
  )
})






