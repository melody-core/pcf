import { Api, Post, Validate } from "@midwayjs/hooks";
import mongoose from "mongoose";
import { z } from "zod";
import { Authentication, CreateCookie } from "./lib/CookieApi";

// 单条存储

const ADMIN_USER_MODEL_SCHEMA = {
  username: String,
  phone: String,
  password: String,
  headerImgUrl: String,
};

const adminUserSchema = new mongoose.Schema(ADMIN_USER_MODEL_SCHEMA, {
  timestamps: true,
});

const adminUserModel = mongoose.model(
  "adminUserObject",
  adminUserSchema,
  "adminUserObject"
);

// 单条存储
const CreateAdminUser = z
  .object({
    username: z.string(),
    phone: z.string(),
    password: z.string(),
    headerImgUrl: z.string(),
  })
  .partial({
    headerImgUrl: true,
    phone: true,
  });

// export const createProject = Api(
//   Post("/api/adminUser/create"),
//   Validate(CreateAdminUser),
//   async (createItemParams) => {
//     const result = await adminUserModel.create({
//       ...(createItemParams || {}),
//     });
//     return result;
//   }
// );
export const findAdminUsers = Api(Post("/api/adminUser/findlist"), async () => {
  const result = await adminUserModel.find();
  return result;
});

// nickname,password,cookie

export const LoginAdminUser = z
  .object({
    username: z.string(),
    // phone: z.string(),
    password: z.string(),
    cookie: z.string(),
    // headerImgUrl: z.string(),
  })
  .partial({
    username: true,
    password: true,
    cookie: true,
  });

export const loginAdminUser = Api(
  Post("/api/adminUser/login"),
  Validate(LoginAdminUser),
  async ({ username, password, cookie }) => {
    if (cookie) {
      const { outTime, id } = Authentication(cookie);
      const nowTime = Date.now();
      if (outTime < nowTime) {
        const error = new Error("登陆过期， 请重新登陆");
        (error as any).code = 401;
        throw error;
      }
      console.log("id:", id);
      const result = await adminUserModel.findById(id);
      if (!result) {
        const error = new Error("登陆过期，请重新登陆!");
        (error as any).code = 402;
        throw error;
      }
      const newCookie = CreateCookie(id);
      return {
        cookie: newCookie,
        userinfo: result,
      };
    }
    if (!username || !password) {
      throw new Error("请输入用户名和密码！");
    }
    const findOne = await adminUserModel.findOne({
      username: {
        $eq: username,
      },
      password: {
        $eq: password,
      },
    });
    if (!findOne) {
      throw new Error("用户名或密码错误！");
    }
    const newCookie = CreateCookie(findOne._id.toString());
    console.log("findOne._id.toString()", findOne._id.toString());
    return {
      cookie: newCookie,
      userinfo: findOne,
    };
  }
);
