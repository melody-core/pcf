/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-14 18:36:17
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-14 18:36:19
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/views/common/ModelForm/components/ModelFieldConfigSetup/effects/libs/VIDEO_EFFECT_COLUMN.tsx
 * @Description: update here
 */
import { ProFormColumnsType } from "@ant-design/pro-components";

export const VIDEO_EFFECT_COLUMN: ProFormColumnsType<
  Record<string, any>,
  "text"
>[] = [
  {
    dataIndex: "maxCount",
    title: "可上传的最大视频数量",
    valueType: "digit",
    tooltip: "非必填,将会检查字段值长度是否不大于给定的数字",
  },
];
