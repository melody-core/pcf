/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2023-10-10 22:33:08
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2023-10-10 22:35:25
 * @FilePath: /melodyLCP/packages/lcp/src/api/ossApi.ts
 * @Description: update here
 */

import { Api, Post, useContext, Validate } from "@midwayjs/hooks";
import OSS from "ali-oss";
import { OSS_CLIENT_CONF } from "./const/db.config";

const { STS } = OSS;

export const createTemplate = Api(Post("/api/oss/sts"), async () => {
  const client = new STS({
    accessKeyId: OSS_CLIENT_CONF.AccessKeyId,
    accessKeySecret: OSS_CLIENT_CONF.AccessKeySecret,
  });

  const result = await client.assumeRole(OSS_CLIENT_CONF.RoleArn, "", 900);
  return {
    AccessKeyId: result.credentials.AccessKeyId,
    AccessKeySecret: result.credentials.AccessKeySecret,
    SecurityToken: result.credentials.SecurityToken,
    Expiration: result.credentials.Expiration,
  };
});
