/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-14 18:38:57
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-17 02:13:02
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/components/VideoField/VideoFieldRead.tsx
 * @Description: update here
 */
import React from 'react';
import { Upload } from 'antd';

export const VideoFieldRead: React.FC<Record<string, any>> = ({
  value = [],
  renderType,
}: any) => {
  if (!(Array.isArray(value) && value?.length)) {
    return <div>-</div>;
  }
  if (value.length === 1 && renderType !== 'table') {
    return <video width="400" height="200" controls src={value[0]?.url} />;
  }
  return <Upload fileList={value} />;
};
