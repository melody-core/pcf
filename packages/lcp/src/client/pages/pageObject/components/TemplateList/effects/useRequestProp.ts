/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-06 11:39:19
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-06 18:10:58
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/pageObject/components/TemplateList/effects/useRequestProp.ts
 * @Description: update here
 */
import { message } from "antd";
import { useCallback } from "react";
import { getTemplateList } from "../../../../../../api/templateApi";

export const useRequestProps = () => async (params, sort) => {
  try {
    // 处理下sort参数
    const orderBy = {};
    for (const key in sort) {
      orderBy[key] = sort[key] === "ascend" ? "asc" : "desc";
    }

    const result = await getTemplateList({
      params,
      sort:
        Object.keys(orderBy).length > 0
          ? orderBy
          : {
              updatedAt: "desc",
            },
    });

    return result?.data;
  } catch (error) {
    message.error(error.data?.message || error.message || "接口请求失败");
    console.error("error", error);
  }
};
