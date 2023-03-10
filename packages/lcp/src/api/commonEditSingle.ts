/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-12-28 19:03:01
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-01-28 16:12:32
 * @FilePath: /melodyLCP/packages/lcp/src/api/commonEditSingle.ts
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

export const commonEditSingle = Api(
  Post("/api/common/:modelName/editSingleById"),
  Params<{ modelName: string }>(),
  async ({ _id, data }) => {
    const ctx = useContext();
    const { modelName } = ctx.params;
    if (!modelName) {
      throw new Error("请求路径缺少模型名称!");
    }
    if (!_id) {
      throw new Error("缺失参数_Id!");
    }
    const targetModel = await getTargetModelByModelName({
      name: modelName,
    });
    if (!targetModel) {
      throw new Error(`不存在的模型: ${modelName}!`);
    }
    const result = await targetModel.findByIdAndUpdate(_id, data);
    // const targetModel = db.collection(modelName);
    // const result = await targetModel.updateOne(
    //   {
    //     _id: {
    //       $eq: new Types.ObjectId(_id),
    //     },
    //   },
    //   {
    //     $set: data,
    //   }
    // );
    return result;
  }
);
