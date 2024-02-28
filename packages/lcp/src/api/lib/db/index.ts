/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-15 14:13:52
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-12-24 21:25:41
 * @FilePath: /melodyLCP/packages/lcp/src/api/lib/db/index.ts
 * @Description: update here
 */

import mongoose from "mongoose";
import { MONGO_LINK } from "../../const/db.config";

mongoose.connect(MONGO_LINK, {
  user: "root",
  pass: "xtjzy@123",
});
export const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("mongoose connect success!");
});
