/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:21:08
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:51:08
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/progress/index.ts
 * @Description: update here
 */
import progressSrc from "../STATIC_IMGS/process.png";
class ProgressFieldType {
  label = "进度条";
  value = "progress";
  img = progressSrc;
}

export const MODEL_FIELD_PROGRESS = new ProgressFieldType();
