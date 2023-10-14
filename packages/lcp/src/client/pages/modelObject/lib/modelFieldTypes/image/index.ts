/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:28:35
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-14 15:40:06
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/image/index.ts
 * @Description: update here
 */

import imgSrc from "./../STATIC_IMGS/img.png";

class ImageFieldType {
  label = "图片";
  value = "image";
  img = imgSrc;
  sort = 8;
}

export const MODEL_FIELD_IMAGE = new ImageFieldType();
