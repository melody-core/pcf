/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-01-28 15:09:00
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-01-28 16:07:11
 * @FilePath: /melodyLCP/packages/lcp/src/api/lib/modelModel.ts
 * @Description: update here
 */

import mongoose from "mongoose";
import { createModelSchemaByMetaData } from "./createModelSchemaByMetaData";
import {
  TP_MODELS_TYPE,
  CreateDBModelParams,
  DropCollectionParams,
} from "./type";

const MODEL_MODEL_SCHEMA = {
  name: { type: String, unique: true },
  title: String,
  author: String,
  desc: String,
  type: String,
  effects: Object,
  fields: [Object],
};
const MODEL_SCHEMA = new mongoose.Schema(MODEL_MODEL_SCHEMA, {
  timestamps: true,
});

export const modelModel = mongoose.model(
  "modelObject",
  MODEL_SCHEMA,
  "modelObject"
);

export const TP_MODELS: TP_MODELS_TYPE = {};

export const getTargetModelByModelName = async ({ name }) => {
  if (TP_MODELS[name]) {
    return TP_MODELS[name];
  }
  const modelMeta = await modelModel.findOne({
    name,
  });
  if (!modelMeta) {
    return;
  }
  const targetModelSchema = await createModelSchemaByMetaData(modelMeta);
  const MODEL_SCHEMA = new mongoose.Schema(targetModelSchema, {
    timestamps: true,
  });
  const targetModel = mongoose.model(name, MODEL_SCHEMA, name);
  TP_MODELS[name] = targetModel;
  return targetModel;
};

export const createCollection = ({
  modelSchema,
  definition,
  modelName,
}: CreateDBModelParams) => {
  const schema = new mongoose.Schema(modelSchema, {
    timestamps: true,
    ...definition,
  });
  const targetModel = mongoose.model(modelName, schema, modelName);
  TP_MODELS[modelName] = targetModel;
  return {
    success: true,
  };
};

export const dropCollection = ({ modelName }: DropCollectionParams) =>
  new Promise((s, r) => {
    const db = mongoose.connection;
    db.dropCollection(modelName, (error) => {
      if (error) {
        r(error);
      } else {
        if (TP_MODELS[modelName]) {
          delete TP_MODELS[modelName];
        }
        s(null);
      }
    });
  });
