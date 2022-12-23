/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-16 16:15:00
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-12-24 02:01:59
 * @FilePath: /bui-integration-platform/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/api/modelApi.ts
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

// 单条查询根据_id
const GetModelDetailById = z.object({
  _id: z.string(),
});

export const getModelById = Api(
  Post("/api/modelConfig/getModelById"),
  Validate(GetModelDetailById),
  async ({ _id }) => {
    if (!_id) {
      throw new Error("缺失请求参数: _id!");
    }
    const findItem = await modelModel.findById(_id);
    if (!findItem) {
      throw new Error("没有这个模型!");
    }
    return findItem;
  }
);

// 单条查询根据modelName
const GetModelDetailByModelName = z.object({
  name: z.string(),
});
export const getModelByName = Api(
  Post("/api/modelConfig/getMetaDataByModelName"),
  Validate(GetModelDetailByModelName),
  async ({ name }) => {
    if (!name) {
      throw new Error("缺失请求参数: name!");
    }
    const findItem = await modelModel.findOne({
      name,
    });
    if (!findItem) {
      throw new Error("没有这个模型!");
    }
    return findItem;
  }
);

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
    const findItem = await modelModel.findOne({
      name,
    });
    if (findItem) {
      throw new Error(`已存在name为${name}的模型！`);
    }
    const modelSchema = {};
    for (const fieldOptions of fields) {
      const { fieldName, type, config = {} } = fieldOptions || {};
      modelSchema[fieldName] = String;
      // todo
      const targetTransformFn = MODEL_FIELD_TYPE_MAP.get(type);
      if (targetTransformFn) {
        const { dbFieldConfig } = await targetTransformFn({
          type,
          config,
        });
        console.log("fieldName:", dbFieldConfig);
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

// 编辑一条根据id
const UpdateModelParams = z.object({
  _id: z.string(),
  data: CreateModel,
});

export const updateModelById = Api(
  Post("/api/modelConfig/updateModelById"),
  Validate(UpdateModelParams),
  async ({ _id, data = {} }) => {
    if (!_id) {
      throw new Error("缺失请求参数: _id!");
    }
    return modelModel.findByIdAndUpdate(_id, data);
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
    const { pageSize = 20, current = 1, ...others } = params || {};
    const total = await modelModel.count();
    const findWhereParams = {
      ...others,
    };
    for (const key in others) {
      if (typeof others[key] === "string") {
        findWhereParams[key] = {
          $regex: others[key],
        };
      } else {
        findWhereParams[key] = {
          $eq: others[key],
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
