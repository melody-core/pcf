## melodyLCP

最实用的系统类低代码平台

## 开发说明

### 低代码平台开发(melody-lcp)

1. 拉取代码后，务必使用 yarn install 来安装依赖(使用了 yarn workspace 来进行包管理)
2. 依赖安装完毕后，请直接运行 yarn init:lcp 来初始化lcp本地文件数据库
3. 初始化完毕后，运行 yarn dev 即可运行低代码平台

### 页面模板库开发（melody-template-core）

> 直接运行yarn docs:tem,即运行模板页面项目

如果需要lcp和模板联动开发，初始化完毕后直接运行 yarn dev。此时如果迭代并保存 页面模板库 的源码的话，lcp会同步热更新。
注意！部分环境可能热更新报错，此时只需手动刷新一下页面即可。

### 文档

见各项目readme
