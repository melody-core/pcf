/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-01-28 15:09:00
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-02-03 15:16:53
 * @FilePath: /melodyLCP/packages/lcp/src/api/lib/modelModel.ts
 * @Description: update here
 */

import mongoose, {
  InferSchemaType,
  Model,
  ObtainSchemaGeneric,
} from "mongoose";
import { createModelSchemaByMetaData } from "./createModelSchemaByMetaData";
import { CreateDBModelParams, DropCollectionParams, TSchema } from "./type";

const MODEL_MODEL_SCHEMA = {
  name: { type: String, unique: true },
  title: String,
  author: String,
  desc: String,
  dataType: String,
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

export const getTargetModelByModelName = async ({
  name,
}): Promise<
  Model<
    InferSchemaType<TSchema>,
    ObtainSchemaGeneric<TSchema, "TQueryHelpers">,
    ObtainSchemaGeneric<TSchema, "TInstanceMethods">,
    {},
    TSchema
  > &
    ObtainSchemaGeneric<TSchema, "TStaticMethods">
> => {
  if (mongoose.models[name]) {
    return mongoose.models[name];
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
  mongoose.model(modelName, schema, modelName);
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
        if (mongoose.models[modelName]) {
          delete mongoose.models[modelName];
        }
        s(null);
      }
    });
  });
