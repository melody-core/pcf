/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-14 16:10:42
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-14 16:10:43
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/video/index.ts
 * @Description: update here
 */
import treeSelectSrc from "../STATIC_IMGS/treeSelect.png";

class VideoFieldType {
  label = "视频";
  value = "video";
  img = treeSelectSrc;
}

export const MODEL_FIELD_VIDEO = new VideoFieldType();
