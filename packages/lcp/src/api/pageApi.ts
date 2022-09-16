/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 11:37:12
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-06 16:45:54
 * @FilePath: /melodyLCP/packages/lcp/src/api/pageApi.ts
 * @Description: update here
 */

import { Api, Get, Post, Query, useContext, Validate } from "@midwayjs/hooks";
import { z } from "zod";
import { prisma } from "./prisma";

// 单条存储

export const createPage = Api(
  Post("/api/pageConfig/create"),
  async (pageConfig) => {
    // const result = await prisma.errorObject.findUnique({
    //   where: {
    //     id: errorObj.id,
    //   },
    // });
    // return result;
    return {
      code: 200,
      success: true,
      data: true,
      massage: "",
    };
  }
);
