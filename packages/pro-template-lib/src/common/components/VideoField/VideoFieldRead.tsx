/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-14 18:38:57
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-14 19:19:10
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/components/VideoField/VideoFieldRead.tsx
 * @Description: update here
 */
import React from 'react';
import { Upload } from 'antd';

export const VideoFieldRead: React.FC<Record<string, any>> = ({
  value = [],
  renderType,
}: any) =>
  Array.isArray(value) && value?.length ? (
    <Upload fileList={value} />
  ) : (
    <div>-</div>
  );
