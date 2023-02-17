/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-07-29 11:10:02
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-10 13:55:37
 * @FilePath: /lcp-asset/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/client/pages/modelObject/views/ModelList/effects/useRequestProps.ts
 * @Description: update here
 */
// import { useParams } from "react-router-dom";
import { getModelList } from "../../../../../../api/modelApi";
import { xFetch } from "../../../../../utils/xFetch";

export const useRequestProps = ({ dataType = "basics" }) => {
  const mergeRequest = async (params, sort) => {
    // 处理下sort参数
    const orderBy = {};
    for (const key in sort) {
      orderBy[key] = sort[key] === "ascend" ? "asc" : "desc";
    }
    const result = await xFetch(
      getModelList({
        params: {
          ...params,
          dataType,
        },
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
  return mergeRequest;
};
