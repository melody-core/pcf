/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-06 16:46:10
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-11 16:24:46
 * @FilePath: /melodyLCP/packages/lcp/src/api/templateApi.ts
 * @Description: update here
 */
import { Api, Get, Post, useContext, Validate } from "@midwayjs/hooks";
import { z } from "zod";
import mongoose, { Query } from "mongoose";

const TEMPLATE_MODEL_SCHEMA = {
  status: "string",
  componentName: "string",
  title: "string",
  desc: "string",
  previewSrc: "string",
  docsSrc: "string",
  author: "string",
};

const templateSchema = new mongoose.Schema(TEMPLATE_MODEL_SCHEMA, {
  timestamps: true,
});

const tamplateModel = mongoose.model(
  "templateObject",
  templateSchema,
  "templateObject"
);

// 单条存储
const CreateTem = z
  .object({
    status: z.string(),
    componentName: z.string(),
    title: z.string(),
    desc: z.string(),
    previewSrc: z.string(),
    docsSrc: z.string(),
  })
  .partial({
    desc: true,
    previewSrc: true,
    docsSrc: true,
  });

export const createTemplate = Api(
  Post("/api/temConfig/createTem"),
  Validate(CreateTem),
  async (temConfig) => {
    const result = await tamplateModel.create(temConfig);
    return result;
  }
);

// 分页查询
const GetTemplateListParams = z.object({
  params: z
    .object({
      status: z.string(),
      componentName: z.string(),
      title: z.string(),
      desc: z.string(),
    })
    .partial(),
  sort: z.object({}),
});
export const getTemplateList = Api(
  Post("/api/temConfig/getList"),
  Validate(GetTemplateListParams),
  async (paramsWithSort) => {
    const { params, sort } = paramsWithSort;
    const { pageSize = 20, current = 1, ...others } = params;
    const total = await tamplateModel.count();
    // const total = await prisma.templateObject.count();
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
    const result = await tamplateModel
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

// update一条

const UpdateTem = z
  .object({
    _id: z.string(),
    title: z.string(),
    desc: z.string(),
    status: z.string(),
    previewSrc: z.string(),
  })
  .partial({
    title: true,
    desc: true,
    status: true,
    previewSrc: true,
  });

export const updateTemplate = Api(
  Post("/api/temConfig/updateTem"),
  Validate(UpdateTem),
  async (temConfig) => {
    const { _id, ...others } = temConfig;
    const result = await tamplateModel.updateOne(
      {
        _id,
      },
      others
    );
    return result;
  }
);

// 删除一条
const DeleteTem = z.object({
  _id: z.string(),
});

export const deleteTemplateById = Api(
  Post("/api/temConfig/deleteTem"),
  Validate(DeleteTem),
  async (temConfig) => {
    const { _id } = temConfig;
    const result = await tamplateModel.deleteOne({
      _id,
    });
    return result;
  }
);
