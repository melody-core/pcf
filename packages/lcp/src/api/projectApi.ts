/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 11:37:12
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-15 22:02:31
 * @FilePath: /melodyLCP/packages/lcp/src/api/projectApi.ts
 * @Description: update here
 */

import { Api, Get, Post, Validate } from "@midwayjs/hooks";
import mongoose from "mongoose";
import { z } from "zod";

// 单条存储

const PROJECT_MODEL_SCHEMA = {
  status: String,
  name: String,
  title: String,
  desc: String,
  admin: String,
  menuConfig: Object,
  icon: String,
  pageConfig: Object,
  jurisdiction: Object,
};

const projectSchema = new mongoose.Schema(PROJECT_MODEL_SCHEMA, {
  timestamps: true,
});

const projectModel = mongoose.model(
  "projectObject",
  projectSchema,
  "projectObject"
);

// 单条存储
const CreateProject = z
  .object({
    name: z.string(),
    title: z.string(),
    desc: z.string(),
    author: z.string(),
    status: z.string(),
    icon: z.string(),
    menuConfig: z.object({}),
    jurisdiction: z.object({}),
    pageConfig: z.object({}),
  })
  .partial({
    desc: true,
    author: true,
    status: true,
    menuConfig: true,
    icon: true,
    jurisdiction: true,
    pageConfig: true,
  });

export const createProject = Api(
  Post("/api/projectConfig/create"),
  Validate(CreateProject),
  async (createItemParams) => {
    const { name } = createItemParams || {};
    const findItem = await projectModel.findOne({
      name,
    });
    if (findItem) {
      throw new Error(`已存在name为${name}的应用！`);
    }
    const result = await projectModel.create({
      ...(createItemParams || {}),
    });
    return result;
  }
);

// 分页查询
const GetProjectListParams = z.object({
  params: z
    .object({
      name: z.string(),
      title: z.string(),
      desc: z.string(),
      author: z.string(),
      status: z.string(),
    })
    .partial(),
  sort: z.object({}),
});

export const getProjectList = Api(
  Post("/api/projectConfig/getList"),
  Validate(GetProjectListParams),
  async (paramsWithSort) => {
    const { params, sort } = paramsWithSort || {};
    const { pageSize = 20, current = 1, ...others } = params || {};
    const total = await projectModel.count();
    const findWhereParams = {
      // ...others,
    };
    for (const key in others) {
      if (others[key] || others[key] === 0) {
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
    }
    const result = await projectModel
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

export const deleteProjectById = Api(
  Post("/api/projectConfig/deleteProjectById"),
  Validate(DeleteTem),
  async (modelConfig) => {
    const { _id } = modelConfig;
    const findItem = await projectModel.findById(_id);
    if (!findItem) {
      throw new Error("没有这个模型!");
    }
    const result = await projectModel.deleteOne({
      _id,
    });
    return result;
  }
);

// 编辑一条根据id
const UpdateProjectParams = z.object({
  _id: z.string(),
  data: CreateProject,
});

export const updateProjectById = Api(
  Post("/api/projectConfig/updateProjectById"),
  Validate(UpdateProjectParams),
  async ({ _id, data = {} }) => {
    if (!_id) {
      throw new Error("缺失请求参数: _id!");
    }
    const target = await projectModel.findByIdAndUpdate(_id, data);
    return target;
  }
);

// 获取一条基于name
const FindProjectByName = z.object({
  name: z.string(),
});

export const findProjectByName = Api(
  Post("/api/projectConfig/getProjectByName"),
  Validate(FindProjectByName),
  async ({ name }) => {
    if (!name) {
      throw new Error("缺失请求参数: name!");
    }
    const target = await projectModel.findOne({
      name,
    });
    return target;
  }
);
// 编辑一条基于name
const UpdateProjectParamsByName = z.object({
  name: z.string(),
  data: CreateProject,
});
export const updateProjectByName = Api(
  Post("/api/projectConfig/updateProjectByName"),
  Validate(UpdateProjectParamsByName),
  async ({ name, data = {} }) => {
    if (!name) {
      throw new Error("缺失请求参数: name!");
    }
    const target = await projectModel.findOneAndUpdate(
      {
        name,
      },
      data
    );
    return target;
  }
);
