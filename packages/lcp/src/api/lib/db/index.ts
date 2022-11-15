/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-15 14:13:52
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-15 15:41:47
 * @FilePath: /mission-order/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/api/lib/db/index.ts
 * @Description: update here
 */

import mongoose from "mongoose";
import { MONGO_LINK } from "../../const/db.config";

mongoose.connect(MONGO_LINK);
export const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("mongoose connect success!");
});
