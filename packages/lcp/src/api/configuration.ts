import { createConfiguration, hooks } from "@midwayjs/hooks";
import * as Koa from "@midwayjs/koa";
import cors from "@koa/cors";
import { FormatMiddleware } from "./FormatMiddleware";

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
