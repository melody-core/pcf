/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-10-04 01:10:08
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-17 16:29:28
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/pro-template-lib/src/utils/getSearchParams.ts
 * @Description: update here
 */

export const getSearchParams = (): Record<string, string> => {
  const searchObj = new URLSearchParams(location.search);
  const result: Record<string, any> = {};
  try {
    searchObj.forEach((v, key) => {
      result[key] = v;
    });
  } catch (error) {
    return result;
  }

  return result;
};
