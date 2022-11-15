/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-16 16:15:00
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-15 16:30:24
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/api/modelApi.ts
 * @Description: update here
 */

import { Api, Post, Validate } from "@midwayjs/hooks";
import mongoose from "mongoose";
import { z } from "zod";
import { MODEL_FIELD_TYPE_MAP } from "./const";
import { createCollection, dropCollection } from "./lib";

const MODEL_MODEL_SCHEMA = {
  name: String,
  title: String,
  author: String,
  desc: String,
  type: String,
  effects: Object,
  fields: [Object],
};
const modelSchema = new mongoose.Schema(MODEL_MODEL_SCHEMA, {
  timestamps: true,
});

const modelModel = mongoose.model("modelObject", modelSchema, "modelObject");

// 单条存储
const CreateModel = z
  .object({
    name: z.string(),
    title: z.string(),
    desc: z.string(),
    author: z.string(),
    fields: z.array(
      z.object({
        fieldName: z.string(),
        type: z.string(),
      })
    ),
    effects: z.object({}),
  })
  .partial({
    desc: true,
    author: true,
    effects: true,
  });

export const createModel = Api(
  Post("/api/modelConfig/create"),
  Validate(CreateModel),
  async (createItemParams) => {
    const { name, fields } = createItemParams || {};
    const modelSchema = {};
    for (const fieldOptions of fields) {
      const { fieldName, type } = fieldOptions || {};
      modelSchema[fieldName] = String;
      const targetTransformFn = MODEL_FIELD_TYPE_MAP.get(type);
      if (targetTransformFn) {
        const { dbFieldConfig } = await targetTransformFn({
          type,
          effect: {},
        });
        modelSchema[fieldName] = dbFieldConfig;
      }
    }
    await createCollection({
      modelSchema,
      modelName: name,
    });
    const result = await modelModel.create(createItemParams);
    return result;
  }
);

// 分页查询
const GetModelListParams = z.object({
  params: z
    .object({
      status: z.string(),
      name: z.string(),
      title: z.string(),
      desc: z.string(),
      author: z.string(),
      type: z.string(),
    })
    .partial(),
  sort: z.object({}),
});

export const getModelList = Api(
  Post("/api/modelConfig/getList"),
  Validate(GetModelListParams),
  async (paramsWithSort) => {
    const { params, sort } = paramsWithSort || {};
    const {
      pageSize = 20,
      current = 1,
      title,
      desc,
      name,
      ...others
    } = params || {};
    const total = await modelModel.count();
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
    const result = await modelModel
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

// 删除单条
// 删除一条
const DeleteTem = z.object({
  _id: z.string(),
});

export const deleteModelById = Api(
  Post("/api/modelConfig/deleteModelById"),
  Validate(DeleteTem),
  async (modelConfig) => {
    const { _id } = modelConfig;
    const findItem = await modelModel.findById(_id);
    if (!findItem) {
      throw new Error("没有这个模型!");
    }
    await dropCollection({
      modelName: findItem.name,
    });
    const result = await modelModel.deleteOne({
      _id,
    });
    return result;
  }
);
