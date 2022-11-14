/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-22 17:10:18
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-10-08 17:21:51
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/components/RuleEngine/effects/useRuleTreeData.ts
 * @Description: 规则引擎树核心
 */

import { useState, useCallback } from 'react';
import { RULE_TREE_DATA_ORIGINAL_VALUE } from './const';

import type { AddTreeNode, CreateOriginalRuleNode, DeleteTreeNode, RuleTreeData, RuleTreeDataCondition, RuleTreeDataLogic, } from './type';


export const createOriginalRuleNode: CreateOriginalRuleNode = (parentTag, index) => ({
  type: 'RULE',
  tag: `${parentTag}-${index}`,
  value: {}
})

/**
 * @desc 规则引擎决策树状态数据
 */
export const useRuleTreeData = () => {
  const [ruleTreeData, setRuleTreeData ] = useState<RuleTreeData>({
    ...RULE_TREE_DATA_ORIGINAL_VALUE
  });
  
  const initTreeData: ()=> void = useCallback(()=>{
    setRuleTreeData({
      ...RULE_TREE_DATA_ORIGINAL_VALUE
    })
  }, [])

  // update tree-data-render
  const updateTreeRender = useCallback(()=>{
    setRuleTreeData({
      ...ruleTreeData
    })
  }, [ruleTreeData])

  // add TypeTreeNode when user click ('且' or '或')
  const addTreeNode: AddTreeNode = useCallback((actionType, parentNode,  targetIndex?)=>{
    if(targetIndex === undefined) {
      const newTreeData = {
        type: actionType,
        tag: parentNode.tag,
        children: [{
          ...parentNode,
          tag: `${parentNode.tag}-1`,
        }, createOriginalRuleNode(parentNode.tag, 2)]
      }
      setRuleTreeData(newTreeData)
      return;
    }
    const {children, tag, type} = parentNode as RuleTreeDataLogic;
    if(type === actionType) {
      (parentNode as RuleTreeDataLogic).children.push(createOriginalRuleNode(tag, children.length+1))
    } else {
      const target = (parentNode as RuleTreeDataLogic).children[targetIndex as number];
      (parentNode as RuleTreeDataLogic).children[targetIndex as number] = {
        type: actionType,
        tag: target.tag,
        children: [{
          ...target,
          tag: `${target.tag}-1`
        }, createOriginalRuleNode(target.tag, 2)]
      }
    }
    setRuleTreeData({
      ...ruleTreeData
    })
  }, [ruleTreeData])

  // deleteTreeNode 
  const deleteTreeNode: DeleteTreeNode = useCallback((parentNode, targetIndex)=>{ 
    if(targetIndex === undefined) {
      setRuleTreeData(null as any);
      return;
    }
    (parentNode as RuleTreeDataLogic).children.splice(targetIndex, 1);
    if((parentNode as RuleTreeDataLogic).children.length > 1) {
      (parentNode as RuleTreeDataLogic).children.forEach((item, index) => {
        item.tag = item.tag.slice(0, item.tag.length-1) + (index + 1);
      })
    }
    if((parentNode as RuleTreeDataLogic).children.length === 1) {
      const uniNode = (parentNode as RuleTreeDataLogic).children[0];
      parentNode.type = uniNode.type;
      (parentNode as RuleTreeDataCondition).tag = uniNode.tag.slice(0, uniNode.tag.length-2);
      (parentNode as RuleTreeDataCondition).value = (uniNode as RuleTreeDataCondition).value;
      if("children" in parentNode) {
        delete (parentNode as any).children;
      }
    }
    setRuleTreeData({...ruleTreeData})
  }, [ruleTreeData])
  
  return {
    ruleTreeData,
    addTreeNode,
    deleteTreeNode,
    initTreeData,
    updateTreeRender,
  }
}

