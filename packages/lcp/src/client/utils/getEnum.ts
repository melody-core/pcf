/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-06 20:54:50
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-06 20:54:51
 * @FilePath: /melodyLCP/packages/lcp/src/client/utils/getEnum.ts
 * @Description: update here
 */

// 专门用来取服务侧定义的枚举值的~
export const getEnum = (options, isStatus?) => {
  const recordEnum = {};
  options.forEach((o) => {
    if (isStatus) {
      recordEnum[o.value] = {
        text: o.label,
        status: o.status,
      };
    } else {
      recordEnum[o.value] = o.label;
    }
  });
  return recordEnum;
};
