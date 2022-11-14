/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-10-04 01:10:08
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-10-04 01:13:13
 * @FilePath: /melodyLCP/packages/lcp/src/client/utils/getSearchParams.ts
 * @Description: update here
 */

export const getSearchParams = (): Record<string, string> => {
  const searchObj = new URLSearchParams(location.search);
  const result = {};
  try {
    searchObj.forEach((v, key) => {
      result[key] = v;
    });
  } catch (error) {
    return result;
  }

  return result;
};
