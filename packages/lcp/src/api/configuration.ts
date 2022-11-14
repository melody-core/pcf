import { createConfiguration, hooks } from "@midwayjs/hooks";
import * as Koa from "@midwayjs/koa";
import cors from "@koa/cors";
import { FormatMiddleware } from "./FormatMiddleware";
import mongoose from "mongoose";
import { MONGO_LINK } from "./const/db.config";

try {
  mongoose.connect(MONGO_LINK);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    // we're connected!
    console.log("mongoose connect success!");
    // const schema = new mongoose.Schema({ name: "string", size: "string" }, { timestamps: true});
    // const Tank = mongoose.model("Tank", schema);
    // const small = new Tank({ size: "small", name: "12" });
    // small.save(function (err) {
    //   if (err) return console.log(err);
    //   // saved!
    // });

    // // or

    // Tank.create({ size: "xixi", name: "1234" }, function (err, small) {
    //   if (err) return console.log(err);
    //   // saved!
    // });
  });
} catch (error) {
  console.error(error);
}

/**
 * setup midway server
 */
export default createConfiguration({
  imports: [
    Koa,
    hooks({
      middleware: [cors({ origin: "*" }), FormatMiddleware],
    }),
  ],
  importConfigs: [{ default: { keys: "session_keys" } }],
});
