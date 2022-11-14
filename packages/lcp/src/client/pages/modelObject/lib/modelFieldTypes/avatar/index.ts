/*
 * @Author: 六弦(melodyWxy)
 * @Date: 2022-11-13 00:26:25
 * @LastEditors: 六弦(melodyWxy)
 * @LastEditTime: 2022-11-14 15:23:26
 * @FilePath: /melodyLCP/packages/lcp/src/client/pages/modelObject/lib/modelFieldTypes/avatar/index.ts
 * @Description: update here
 */

import avatarSrc from "../STATIC_IMGS/avatar.png";

class AvatarFieldType {
  label = "头像";
  value = "avatar";
  img = avatarSrc;
}

export const MODEL_FIELD_AVATAR = new AvatarFieldType();
