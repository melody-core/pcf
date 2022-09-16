/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-06 20:35:46
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-06 20:38:33
 * @FilePath: /melodyLCP/packages/lcp/src/client/utils/compareObject.ts
 * @Description: update here
 */

// 专门用来比对“列表编辑”的data与row的通用方法。
export const compareObject = (data, row) => {
  const result = {};
  for (const i in data) {
    if (data[i] !== row[i]) {
      result[i] = data[i];
    }
  }
  return result;
};
