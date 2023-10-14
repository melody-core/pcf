/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-10 22:43:56
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-14 19:17:15
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/components/VideoField/VideoFieldEdit.tsx
 * @Description: update here
 */
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Upload, UploadProps } from 'antd';
import { RcFile } from 'antd/lib/upload';
import { useEffect, useMemo, useState } from 'react';
import { getOssStsConfig } from '../../../sevice/getOssStsConfig';
import { uploadFile } from '../../libs/upload';
import OSS from 'ali-oss';

export const VideoFieldEdit = (props: any) => {
  const { value, onChange, maxCount, mode } = props || {};
  const [fileList, setFileList] = useState(value || []);

  useEffect(() => {
    setFileList(value || []);
  }, [value]);

  const handleChange: UploadProps['onChange'] = async (info) => {
    if (info.file.status === 'removed') {
      onChange?.(info.fileList);
    }
  };

  return (
    <>
      <Upload
        action="//melodyworld.oss-cn-beijing.aliyuncs.com/"
        customRequest={async ({ file }) => {
          const fileName = `melodyLcp/${Date.now()}_${(file as RcFile).name}`;
          const current = {
            uid: fileName,
            name: fileName,
            url: fileName,
            status: 'uploading',
          };
          setFileList?.(
            Array.isArray(fileList) ? [...fileList, current] : [current]
          );
          try {
            const stsConfig = await getOssStsConfig();
            const { success, data } = stsConfig || {};
            if (success) {
              const client = new OSS({
                region: 'oss-cn-beijing',
                accessKeyId: data.AccessKeyId,
                accessKeySecret: data.AccessKeySecret,
                bucket: 'melodyworld',
                stsToken: data.SecurityToken,
              });

              const result = await uploadFile({
                client,
                file,
                mime: (file as any)?.type,
                filename: fileName,
              });
              if (result.res.statusCode === 200) {
                let nImageUrl = result.res.requestUrls[0];
                try {
                  const imgUrlIns = new URL(nImageUrl);
                  imgUrlIns.searchParams.delete('uploadId');
                  nImageUrl = imgUrlIns.toString();
                } catch (error) {
                  nImageUrl = result.res.requestUrls[0];
                }
                const imgname = result.name;
                const target = {
                  uid: nImageUrl,
                  name: imgname,
                  url: nImageUrl,
                  status: 'done',
                };
                onChange?.(
                  Array.isArray(value) ? [...value, target] : [target]
                );
              }
            }
          } catch (error) {}
        }}
        fileList={fileList || []}
        // beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        <Button
          disabled={maxCount ? value?.length >= maxCount : false}
          icon={<UploadOutlined />}
        >
          点击上传
        </Button>
      </Upload>
    </>
  );
};
