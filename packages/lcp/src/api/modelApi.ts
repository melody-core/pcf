/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-16 16:15:00
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-19 16:52:43
 * @FilePath: /todoweb/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/api/modelApi.ts
 * @Description: update here
 */

import { Api, Get, Post, Query, useContext, Validate } from "@midwayjs/hooks";
import { z } from "zod";
import { prisma } from "./prisma";

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
    type: z.string(),
  })
  .partial({
    desc: true,
    author: true,
    effects: true,
  });

export const createModel = Api(
  Post("/api/modelConfig/create"),
  Validate(CreateModel),
  async ({ fields, effects, ...others }) => {
    const result = await prisma.modelObject.create({
      data: {
        fields: JSON.stringify(fields || []),
        effects: JSON.stringify(effects || {}),
        ...others,
      },
    });
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
    const { params, sort } = paramsWithSort;
    const { pageSize = 20, current = 1, title, desc, name, ...others } = params;
    const total = await prisma.modelObject.count();
    const findParams = {
      where: {
        ...others,
      },
      skip: pageSize * (current - 1),
      take: pageSize,
      orderBy: sort,
    };
    if (title) {
      findParams.where.title = {
        contains: title,
      };
    }
    if (name) {
      findParams.where.name = {
        contains: name,
      };
    }
    if (desc) {
      findParams.where.desc = {
        contains: desc,
      };
    }
    const result = await prisma.modelObject.findMany(findParams);
    return {
      data: result,
      total,
      success: true,
    };
  }
);
