## melodyLCP

最实用的系统类低代码平台

### 开发前须知

#### 文档不能解决的问题找作者

> @六弦 - 钉钉 & 微信 - 18210711176

#### 数据库

> 两种模式，远程数据库或本地数据库选一即可

1. 远程数据库：请直接联系 六弦 索要数据库的链接url， 然后在项目的 packages/lcp/src/api/const/db.config.ts 路径文件中，将MONGO_LINK的值进行替换(建议你如此做)；
2. 本地数据库：，需要开发者本地安装mongoDB， 同时建议安装 ROBO 3T(mongoDB可视化管理工具), 本地安装mongodb后，创建db， 名为 melody-lcp;

#### node环境

> 需要node v16 或者以上环境

#### yarn

> 使用yarn进行依赖管理，因此需要安装yarn,这个很重要！

达成上述条件即可轻松运行项目，参与开发啦。

### 开发说明

clone后使用yarn install安装依赖， 在项目根目录下，执行yarn build:tem对无代码模板组件库打包；

```shell
# 在项目的根目录下， 先做着两件事～
# cd 到项目的根目录
# 请使用node v16以上版本，如果没有安装且没有安装nvm， 可以在package.json中去掉此限制(尽管不建议这样做)。
nvm use 16

yarn install
yarn build:tem
# 运行低代码平台和组件库dev模式
yarn dev
```

### 文档

见各项目readme
