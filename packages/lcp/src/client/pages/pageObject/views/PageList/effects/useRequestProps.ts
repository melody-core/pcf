/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-29 11:10:02
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-05 14:48:28
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/components/PageList/effects/useRequestProps.ts
 * @Description: update here
 */
import { message } from "antd";
import { useCallback } from "react";
// import { getErrorList } from './../../../../../../api/errorObject'

export const useRequestProps = () => async (params, sort) => {
  try {
    // 处理下sort参数
    const orderBy = {};
    for (const key in sort) {
      orderBy[key] = sort[key] === "ascend" ? "asc" : "desc";
    }

    // const result = await getErrorList({
    //   params,
    //   sort: Object.keys(orderBy).length > 0 ? orderBy : {
    //     lastShowTime: 'desc'
    //   },
    // });

    return [];
  } catch (error) {
    message.error(error.data?.message || error.message || "接口请求失败");
    console.error("error", error);
  }
};
