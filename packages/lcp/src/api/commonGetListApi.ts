/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-15 11:43:30
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-15 16:15:58
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/api/commonGetListApi.ts
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
import mongoose from "mongoose";
import { z } from "zod";
// import { MODEL_FIELD_TYPE_MAP } from "./const";
// import { createCollection, dropCollection } from "./lib";
import { db } from "./lib/db";

export const getCommonModelRecordsList = Api(
  Post("/api/common/:modelName/getList"),
  Params<{ modelName: string }>(),
  async (paramsWithSort) => {
    const ctx = useContext();
    const { modelName } = ctx.params;
    if (!modelName) {
      throw new Error("请求路径缺少模型名称!");
    }
    const { params, sort } = paramsWithSort;
    const { pageSize = 20, current = 1, title, desc, name, ...others } = params;
    const targetModel = db.collection(modelName);
    const total = await targetModel.count();
    const findWhereParams = {
      ...others,
    };
    for (const key in others) {
      if (typeof others[key] === "string") {
        findWhereParams[key] = {
          $regex: others[key],
        };
      }
    }
    const result = await targetModel
      .find(findWhereParams)
      .skip(pageSize * (current - 1))
      .limit(pageSize)
      .sort(sort);
    return {
      data: result,
      total,
    };
  }
);
