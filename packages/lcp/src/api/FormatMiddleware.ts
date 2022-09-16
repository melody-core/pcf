/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-06-10 14:19:05
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-09-07 10:09:09
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
    ): Promise<{ code: number; msg: string; data: any; success: boolean }> => {
      const result = await next();
      return {
        code: 200,
        msg: "",
        data: result,
        success: true,
      };
    };
  }

  match(ctx) {
    return ctx.path.indexOf("/api") !== -1;
  }
}
