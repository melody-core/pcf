/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-10 22:43:56
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-11 00:30:10
 * @FilePath: /melodyLCP/packages/pro-template-lib/src/common/components/ImageField/ImageFieldEdit.tsx
 * @Description: update here
 */
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload, UploadProps, message } from 'antd';
import { RcFile } from 'antd/lib/upload';
import { useMemo, useState } from 'react';
import { getOssStsConfig } from '../../../sevice/getOssStsConfig';
import { uploadBase64Img } from '../../libs/upload';
import OSS from 'ali-oss';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const ImageFieldEdit = (props: any) => {
  console.log('props:', props);
  const { value, onChange, mode } = props || {};
  const [loading, setLoading] = useState(false);
  const uploadButton = useMemo(
    () => (
      <div>
        <PlusOutlined type={loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    ),
    [loading]
  );

  const beforeUpload = async (file: RcFile) => {
    const isJpgOrPng =
      file.type === 'image/jpeg' ||
      file.type === 'image/png' ||
      file.type === 'image/jpg';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange: UploadProps['onChange'] = async (info) => {
    if (info.file.status === 'removed') {
      onChange?.(info.fileList);
    }
  };

  return (
    <>
      <Upload
        name="img"
        listType="picture-card"
        action="//melodyworld.oss-cn-beijing.aliyuncs.com/"
        customRequest={async ({ file }) => {
          const imageUrl = await getBase64(file as RcFile);
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
            const result = await uploadBase64Img({
              client,
              base64Content: imageUrl,
              filename: `melodyLcp/${Date.now()}_${(file as RcFile).name}`,
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
              setLoading(false);
              const target = {
                uid: nImageUrl,
                name: imgname,
                url: nImageUrl,
                status: 'done',
              };
              onChange?.(Array.isArray(value) ? [...value, target] : [target]);
            }
          }
        }}
        fileList={value || []}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {uploadButton}
      </Upload>
    </>
  );
};
