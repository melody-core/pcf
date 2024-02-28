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
  level: Number,
  pros: Array,
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
const CreateNextUser = z
  .object({
    username: z.string(),
    phone: z.string(),
    password: z.string(),
    headerImgUrl: z.string(),
    level: z.number(),
    pros: z.array(z.string()),
  })
  .partial({
    headerImgUrl: true,
    phone: true,
    level: true,
    pros: true,
  });

// update

export const UpdateAdminUser = z
  .object({
    cookie: z.string(),
    username: z.string(),
    phone: z.string(),
    password: z.string(),
    headerImgUrl: z.string(),
    level: z.number(),
    // headerImgUrl: z.string(),
  })
  .partial({
    headerImgUrl: true,
    phone: true,
    username: true,
    password: true,
    level: true,
  });

export const DeleteAdminUser = z.object({
  cookie: z.string(),
  _id: z.string(),
  // headerImgUrl: z.string(),
});

// --admin --
// export const createAdminUser = Api(
//   Post("/api/adminUser/admin"),
//   Validate(CreateNextUser),
//   async (createItemParams) => {
//     console.log("createItemParams:", createItemParams);
//     const result = await adminUserModel.create({
//       ...(createItemParams || {}),
//       // level: 7,
//     });
//     return result;
//   }
// );

// 次级管理员
export const createNextUser = Api(
  Post("/api/adminUser/createNext"),
  Validate(CreateNextUser),
  async (createItemParams) => {
    const result = await adminUserModel.create({
      ...(createItemParams || {}),
      level: 7,
    });
    return result;
  }
);

// update
export const updateAdminUser = Api(
  Post("/api/adminUser/updateNext"),
  Validate(UpdateAdminUser),
  async ({ cookie, ...others }) => {
    if (cookie) {
      const { id } = Authentication(cookie);
      const result = await adminUserModel.findById(id);
      if (!result) {
        const error = new Error("此超级管理员账号已不存在!");
        (error as any).code = 402;
        throw error;
      }
      if (result.username !== "admin") {
        const error = new Error("非超级管理员账号，无权限执行此命令!");
        (error as any).code = 402;
        throw error;
      }
      await adminUserModel.findByIdAndUpdate(id, {
        ...others,
      });
      return true;
    }
    const error = new Error("未登录!");
    (error as any).code = 402;
    throw error;
  }
);

// delete
export const deleteAdminUser = Api(
  Post("/api/adminUser/deleteUserById"),
  Validate(DeleteAdminUser),
  async ({ cookie, _id }) => {
    if (cookie) {
      const { id } = Authentication(cookie);
      const result = await adminUserModel.findById(id);
      if (!result) {
        const error = new Error("此超级管理员账号已不存在!");
        (error as any).code = 402;
        throw error;
      }
      if (result.username !== "admin") {
        const error = new Error("非超级管理员账号，无权限执行此命令!");
        (error as any).code = 402;
        throw error;
      }
      await adminUserModel.findByIdAndRemove(_id);
      return true;
    }
    const error = new Error("未登录!");
    (error as any).code = 402;
    throw error;
  }
);

// 只读用户
export const createReadOnlyUser = Api(
  Post("/api/adminUser/createReadOnly"),
  Validate(CreateNextUser),
  async (createItemParams) => {
    const result = await adminUserModel.create({
      ...(createItemParams || {}),
      level: 3,
    });
    return result;
  }
);

export const findAdminUsers = Api(Post("/api/adminUser/findlist"), async () => {
  const result = await adminUserModel.find();
  return result.filter((item) => item.username !== "admin");
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
        const error = new Error("此账号已不存在!");
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
