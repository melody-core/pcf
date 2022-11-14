import { Select } from "antd"
import { useState } from "react";

import styles from '../index.module.less';

export const useFieldSelected = ({
  modelFields,
  targetNode,
  updateTreeRender,
}) => {
  const [targetFiled, setTargetField] = useState();
  const [targetWay, setWay] = useState();

  const { value = {} } = targetNode;
  const { field, way } = value;

  const options = modelFields?.map(item => ({
    ...item,
    label: item.name,
    value: item.field
  }))
  const handleChange = (v, record) => {
    value.field = v;
    updateTreeRender();
  }
  console.log('options', options)
  const fieldSelectedUi = (
    <>
      <Select value={field} style={{ marginLeft: 10 }} className={styles.field_select} options={options} onChange={handleChange} />
      {field && (
        <Select 
          value={way}
          style={{ marginLeft: 10 }}
          className={styles.field_select}
          options={[{
            label: '早于',
            value: 'zaoyu',
          }, {
            label: '晚于',
            value: 'wanyu'
          }]}
        />
      )}
    </>
  )
  return {
    fieldSelectedUi,
  }
}