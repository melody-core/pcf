/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-15 16:51:45
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-01-28 16:15:39
 * @FilePath: /melodyLCP/packages/lcp/src/api/commonGetDetailById.ts
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
import { getTargetModelByModelName } from "./lib";

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
    const targetModel = await getTargetModelByModelName({
      name: modelName,
    });
    if (!targetModel) {
      throw new Error(`不存在的模型: ${modelName}!`);
    }
    const result = await targetModel.findById(_id);
    // const targetModel = db.collection(modelName);
    // const result = await targetModel.findOne({
    //   _id: {
    //     $eq: new Types.ObjectId(_id),
    //   },
    // });
    return result;
  }
);
