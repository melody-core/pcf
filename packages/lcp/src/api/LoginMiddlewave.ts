/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2024-02-28 12:56:01
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2024-02-28 13:08:54
 * @FilePath: /melodyLCP/packages/lcp/src/api/LoginMiddlewave.ts
 * @Description: update here
 */

import { IMiddleware } from "@midwayjs/core";
import { Middleware } from "@midwayjs/decorator";
import { NextFunction, Context } from "@midwayjs/koa";

@Middleware()
export class LoginMiddlewave implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (
      ctx: Context,
      next: NextFunction
    ): Promise<{
      code: number;
      msg?: string;
      data?: any;
      success: boolean;
      error?: Error;
    }> => {
      try {
        // const data = await next();
        const cookie = ctx.headers["x-Token"];
        console.log(ctx.headers);
        console.log("cookie:", cookie);
        return {
          code: 200,
          msg: "",
          data: null,
          success: true,
        };
      } catch (error) {
        const { name, message, code } = error;
        return {
          code: -3,
          msg: error.toString ? error.toString() : `${name}: ${message}`,
          error,
          success: false,
        };
      }
    };
  }

  match(ctx) {
    return ctx.path.indexOf("/login") !== -1;
  }
}
