/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-15 16:51:45
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-22 23:58:24
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/api/commonGetDetailById.ts
 * @Description: update here
 */

import {
  Api,
  Get,
  Post,
  Query,
  Validate,
  Params,
  useContext,
} from "@midwayjs/hooks";
import { z } from "zod";
import { db } from "./lib/db";
import { Types } from "mongoose";

const GetDetailById = z.object({
  _id: z.string(),
});

export const commonGetDetailById = Api(
  Post("/api/common/:modelName/getDetailById"),
  Validate(GetDetailById),
  Params<{ modelName: string }>(),
  async ({ _id }) => {
    const ctx = useContext();
    const { modelName } = ctx.params;
    if (!modelName) {
      throw new Error("请求路径缺少模型名称!");
    }
    const targetModel = db.collection(modelName);
    const result = await targetModel.findOne({
      _id: {
        $eq: new Types.ObjectId(_id),
      },
    });
    return result;
  }
);
