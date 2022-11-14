import mongoose from "mongoose";
import { DropCollectionParams } from "./type";

export const dropCollection = ({ modelName }: DropCollectionParams) =>
  new Promise((s, r) => {
    const db = mongoose.connection;
    db.dropCollection(modelName, (error) => {
      if (error) {
        r(error);
      } else {
        s(null);
      }
    });
  });
