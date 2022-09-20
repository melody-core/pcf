/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-06 16:46:10
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-16 15:28:56
 * @FilePath: /todoweb/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/api/templateApi.ts
 * @Description: update here
 */
import { Api, Get, Post, Query, useContext, Validate } from "@midwayjs/hooks";
import { z } from "zod";
import { prisma } from "./prisma";

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
    const result = await prisma.templateObject.create({
      data: temConfig,
    });
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
    const {
      pageSize = 20,
      current = 1,
      componentName,
      title,
      desc,
      ...others
    } = params;
    const total = await prisma.templateObject.count();
    const findParams = {
      where: {
        ...others,
      },
      skip: pageSize * (current - 1),
      take: pageSize,
      orderBy: sort,
    };
    if (componentName) {
      findParams.where.url = {
        contains: componentName,
      };
    }
    if (title) {
      findParams.where.title = {
        contains: title,
      };
    }
    if (desc) {
      findParams.where.desc = {
        contains: desc,
      };
    }
    const result = await prisma.templateObject.findMany(findParams);
    return {
      data: result,
      total,
      success: true,
    };
  }
);

// update一条

const UpdateTem = z
  .object({
    id: z.number(),
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
    const { id, ...others } = temConfig;
    const result = await prisma.templateObject.update({
      where: {
        id: temConfig.id,
      },
      data: {
        ...others,
      },
    });
    return result;
  }
);

// 删除一条
const DeleteTem = z.object({
  id: z.number(),
});

export const deleteTemplateById = Api(
  Post("/api/temConfig/deleteTem"),
  Validate(DeleteTem),
  async (temConfig) => {
    const { id } = temConfig;
    const result = await prisma.templateObject.delete({
      where: {
        id: id,
      },
    });
    return result;
  }
);
