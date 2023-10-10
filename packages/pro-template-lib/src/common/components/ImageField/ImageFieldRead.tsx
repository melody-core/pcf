import React from 'react';
import { Image } from 'antd';

export const ImageFieldRead: React.FC<Record<string, any>> = ({
  value = [],
  renderType,
}: any) =>
  Array.isArray(value) && value?.length ? (
    <Image.PreviewGroup>
      {value.map((item) => (
        <Image
          width={renderType === 'table' ? 50 : 100}
          height={renderType === 'table' ? 50 : 100}
          src={item.url}
        />
      ))}
    </Image.PreviewGroup>
  ) : (
    <div>-</div>
  );
