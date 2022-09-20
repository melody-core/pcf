/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-10 14:19:05
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-19 16:56:44
 * @FilePath: /todoweb/Users/wxy/codeWorks/melodyLCP/packages/lcp/src/api/FormatMiddleware.ts
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
        const { status, name, code } = error;
        console.log(error);
        return {
          code: status,
          msg: `${code}: ${name}`,
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
