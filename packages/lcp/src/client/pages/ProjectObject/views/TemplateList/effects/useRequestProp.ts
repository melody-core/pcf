/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-06 11:39:19
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-11 10:17:48
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/views/TemplateList/effects/useRequestProp.ts
 * @Description: update here
 */
import { message } from "antd";
import { useCallback } from "react";
import { getTemplateList } from "../../../../../../api/templateApi";
import { xFetch } from "../../../../../utils/xFetch";

export const useRequestProps = () => async (params, sort) => {
  // 处理下sort参数
  const orderBy = {};
  for (const key in sort) {
    orderBy[key] = sort[key] === "ascend" ? "asc" : "desc";
  }
  const result = await xFetch(
    getTemplateList({
      params,
      sort:
        Object.keys(orderBy).length > 0
          ? orderBy
          : {
              updatedAt: "desc",
            },
    })
  );
  return result?.data || [];
};
