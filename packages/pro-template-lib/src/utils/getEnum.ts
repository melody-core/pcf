/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-06 20:54:50
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-17 16:29:42
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/utils/getEnum.ts
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
