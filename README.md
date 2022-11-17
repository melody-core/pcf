## melodyLCP

最实用的系统类低代码平台

### 开发说明

clone后使用yarn install安装依赖， cd到项目根目录下，使用yarn dev运行即可。

### 开发须知

1. 目前还是使用本地数据库进行开发，因此需要开发者本地安装mongoDB， 同时建议安装 ROBO 3T(mongoDB可视化管理工具), 本地安装mongodb后，创建db， 名为 melody-lcp;
2. 需要node v16 或者以上环境
3. 使用yarn进行依赖管理，因此需要安装yarn

达成上述条件即可轻松运行项目，参与开发啦。

### 低代码平台开发(melody-lcp)

1. 拉取代码后，务必使用 yarn install 来安装依赖(使用了 yarn workspace 来进行包管理)
2. 依赖安装完毕后，运行 yarn dev 即可运行低代码平台，注意mongodb的配置项

### 页面模板库开发（melody-template-core）

> 直接运行yarn docs:tem,即运行模板页面项目

如果需要lcp和模板联动开发，初始化完毕后直接运行 yarn dev。此时如果迭代并保存 页面模板库 的源码的话，lcp会同步热更新。
注意！部分环境可能热更新报错，此时只需手动刷新一下页面即可。

### 文档

见各项目readme
