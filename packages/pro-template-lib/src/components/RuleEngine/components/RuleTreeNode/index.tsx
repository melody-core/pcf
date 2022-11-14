/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-22 19:32:06
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-10-08 17:23:14
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/components/RuleEngine/components/RuleTreeNode/index.tsx
 * @Description: update here
 */
import { FC, ReactNode } from "react" 
import { Button, Select, Tag } from "antd"

import { RuleTreeNodeProps } from "./type"
import { RestOutlined } from "@ant-design/icons"

import { RULE_TREE_NODE_LOGIC_TYPES } from '../../effects'
import { useFieldSelected } from './effects'

import styles from './index.module.less';


export const RuleTreeNode: FC<RuleTreeNodeProps> = ({
  parentNode,
  targetIndex,
  targetNode,
  modelFields,
  addTreeNode,
  deleteTreeNode,
  updateTreeRender
}) => {
  console.log('modelFields', modelFields)
  const { tag, type } = targetNode;
  const isRule = type === 'RULE';
  let afterTagUI: ReactNode;
  const { type: parentType } = parentNode || {};

  const { fieldSelectedUi } = useFieldSelected({
    modelFields,
    targetNode,
    updateTreeRender
  });
  if(isRule) {
    afterTagUI = (
      <>
        {fieldSelectedUi}
        <div className={styles['option_group']}>
          <div
            onClick={()=>addTreeNode(RULE_TREE_NODE_LOGIC_TYPES.AND, (parentNode || targetNode) as any, targetIndex as any)}
            className={styles['option_icon']}
            style={{background: '#2db7f5'}}
          >
            且
          </div>
          <div
            onClick={()=>addTreeNode(RULE_TREE_NODE_LOGIC_TYPES.OR, (parentNode || targetNode) as any, targetIndex as any)}
            className={styles['option_icon']}
            style={{background: '#87d068'}}
          >
            或
          </div>
          <div onClick={()=>deleteTreeNode(parentNode||targetNode, targetIndex)} style={{background: '#f50'}} className={styles['option_icon']}><RestOutlined color="#fff"/></div>
        </div>
      </>
    )
  } else {
    const targetChildren = targetNode.children?.map((item, index) => (
      <RuleTreeNode updateTreeRender={updateTreeRender} modelFields={modelFields} deleteTreeNode={deleteTreeNode} addTreeNode={addTreeNode} parentNode={targetNode} targetIndex={index} targetNode={item}  key={item.tag}/>
    ))
    afterTagUI = (
      <>
         <div className={styles['logic_line']} />
         <div className={styles['children_Wrap']}>
           {targetChildren}
         </div>
      </>
   )
  }
  
  return (
    <div className={styles.role_node_wrap}>
      {parentType && (
        <>
          {(targetIndex!==0) && <div className={styles.column_top_line}/>}
          {(targetIndex!==(parentNode as any)?.children?.length-1) && <div className={styles['column_line']} />}
          {(targetIndex!==(parentNode as any)?.children?.length-1) &&(
            <Button 
              className={styles['btn_wrap']}
              type="primary" shape="circle"
            >
              {parentType === RULE_TREE_NODE_LOGIC_TYPES.AND ? '且' : '或' }
            </Button>
          )}
          <div className={styles['row_line']} />
        </>
      )}
     
      <Tag className={styles['target_tag']} color='#2db7f5'>{tag}</Tag>
      {afterTagUI}
    </div>
  )
}