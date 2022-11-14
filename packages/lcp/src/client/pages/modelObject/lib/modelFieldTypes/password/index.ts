/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:05:33
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:24:30
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/password/index.ts
 * @Description: update here
 */

import pwSrc from "../STATIC_IMGS/password.png";

class PasswordFieldType {
  label = "密码输入框";
  value = "password";
  img = pwSrc;
}

export const MODEL_FIELD_PASSWORD = new PasswordFieldType();
