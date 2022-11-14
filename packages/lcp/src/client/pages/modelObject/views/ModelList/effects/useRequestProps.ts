/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-29 11:10:02
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-11 10:07:53
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/views/ModelList/effects/useRequestProps.ts
 * @Description: update here
 */
import { message } from "antd";
import { useCallback } from "react";
import { getModelList } from "../../../../../../api/modelApi";
import { xFetch } from "../../../../../utils/xFetch";

export const useRequestProps = () => async (params, sort) => {
  // 处理下sort参数
  const orderBy = {};
  for (const key in sort) {
    orderBy[key] = sort[key] === "ascend" ? "asc" : "desc";
  }

  const result = await xFetch(
    getModelList({
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
