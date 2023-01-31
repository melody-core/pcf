/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-09-05 11:37:12
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-01-29 21:38:46
 * @FilePath: /melodyLCP/packages/lcp/src/api/pageApi.ts
 * @Description: update here
 */

import { Api, Get, Post, Query, useContext, Validate } from "@midwayjs/hooks";
import mongoose from "mongoose";

// 单条存储

const PAGE_MODEL_SCHEMA = {
  status: "string",
  componentName: "string",
  title: "string",
  desc: "string",
  previewSrc: "string",
  docsSrc: "string",
  author: "string",
};

const pageSchema = new mongoose.Schema(PAGE_MODEL_SCHEMA, {
  timestamps: true,
});

const pageModel = mongoose.model("pageObject", pageSchema, "pageObject");

export const createPage = Api(
  Post("/api/pageConfig/create"),
  async (pageConfig) => {
    const result = await pageModel.create({
      ...pageConfig,
    });
    return result;
  }
);
