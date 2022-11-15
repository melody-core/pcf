/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-14 11:28:01
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-15 11:18:52
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/components/SelectWithTipImg/index.tsx
 * @Description: update here
 */

import React, { useRef, useState } from 'react';
import { Select } from 'antd';
import styles from './index.module.less';

export const SelectWithTipImg = ({ options = [], ...others }: any) => {
  const [showPre, setShowPre] = useState(false);
  const [cuTarget, setCuTarget] = useState<any>(null);

  const handleDropdownVisibleChange = (isShow: boolean) => {
    if (!isShow) {
      setCuTarget(null);
    }
    setShowPre(isShow);
  };

  const realOptions = options.map((o: { value: any }) => ({
    ...o,
    onMouseEnter: () => {
      setCuTarget(o.value);
    },
  }));
  const targetSrc = cuTarget
    ? options.find((item: any) => item.value === cuTarget)?.img
    : null;
  return (
    <div className={styles['x_select_wrap']}>
      <Select
        onDropdownVisibleChange={handleDropdownVisibleChange}
        options={realOptions}
        {...others}
      />
      {showPre && cuTarget && (
        <div
          className={styles['x_select_preview']}
          style={{ backgroundImage: `url(${targetSrc})` }}
        />
      )}
    </div>
  );
};
