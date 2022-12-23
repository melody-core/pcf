/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-24 02:48:38
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 03:10:01
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/api/commonDeleteSingleById.ts
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

const DeleteSingleById = z.object({
  _id: z.string(),
});

export const commonDeleteSingleById = Api(
  Post("/api/common/:modelName/deleteSingleById"),
  Validate(DeleteSingleById),
  Params<{ modelName: string }>(),
  async ({ _id }) => {
    console.log("_id:", _id);
    const ctx = useContext();
    const { modelName } = ctx.params;
    if (!modelName) {
      throw new Error("请求路径缺少模型名称!");
    }
    const targetModel = db.collection(modelName);
    const result = await targetModel.deleteOne({
      _id: {
        $eq: new Types.ObjectId(_id),
      },
    });
    return result;
  }
);
