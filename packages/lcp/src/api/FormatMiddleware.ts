/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-10 14:19:05
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-11 16:13:39
 * @FilePath: /melodyLCP/packages/lcp/src/api/FormatMiddleware.ts
 * @Description: update here
 */
import { IMiddleware } from "@midwayjs/core";
import { Middleware } from "@midwayjs/decorator";
import { NextFunction, Context } from "@midwayjs/koa";

@Middleware()
export class FormatMiddleware implements IMiddleware<Context, NextFunction> {
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
        const data = await next();
        return {
          code: 200,
          msg: "",
          data,
          success: true,
        };
      } catch (error) {
        const { name, message } = error;
        return {
          code: 500,
          msg: error.toString ? error.toString() : `${name}: ${message}`,
          error,
          success: false,
        };
      }
    };
  }

  match(ctx) {
    return ctx.path.indexOf("/api") !== -1;
  }
}
