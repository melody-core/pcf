/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-29 11:10:02
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-19 17:00:32
 * @FilePath: /todoweb/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/components/ModelList/effects/useRequestProps.ts
 * @Description: update here
 */
import { message } from "antd";
import { useCallback } from "react";
import { getModelList } from "../../../../../../api/modelApi";

export const useRequestProps = () => async (params, sort) => {
  try {
    // 处理下sort参数
    const orderBy = {};
    for (const key in sort) {
      orderBy[key] = sort[key] === "ascend" ? "asc" : "desc";
    }

    const result = await getModelList({
      params,
      sort:
        Object.keys(orderBy).length > 0
          ? orderBy
          : {
              updatedAt: "desc",
            },
    });
    console.log("result", result);
    return result?.data;
  } catch (error) {
    message.error(error.data?.message || error.message || "接口请求失败");
    console.error("error", error);
  }
};
