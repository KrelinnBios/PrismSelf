# PrismSelf

<p align="center">
  <img src="favicon.svg" width="128" alt="PrismSelf logo">
</p>

<p align="center">
  <strong>PrismSelf</strong><br>
  面向性别理论、心理概念与人际关系议题的中文自我探索与科普知识库
</p>

## 项目简介

PrismSelf 是一个可直接部署的静态网页知识库，聚合概念分析、专题指南、调查报告、共鸣刻度、自评量表和关系沟通工具。项目当前不依赖构建流程，页面由原生 HTML、CSS 和 JavaScript 组成，既可在线访问，也可在本地直接打开。

内容主要用于学习、自我探索和个人理解辅助，不构成医疗、心理、法律或其他专业建议。

## 在线访问

<https://prismself.pages.dev/>

也可以直接用浏览器打开 [index.html](./index.html) 本地浏览。

## 功能概览

- 知识入口：[index.html](./index.html) 提供分类导航、搜索、最近更新和内容卡片。
- 主题分析：[Analyses](./Analyses) 收录概念辨析、主题分析和对照页面。
- 专题指南：[Guides](./Guides) 收录长篇指南、术语表和科普页面。
- 专题内容：[Topics](./Topics) 收录调查报告、专题对谈与社群观察页面。
- 共鸣刻度：[Bingos](./Bingos) 收录共鸣刻度与宾果类互动页面。
- 自评量表：[Scales](./Scales) 收录量表与自评页面。
- 关系工具：[Tools](./Tools) 收录关系沟通与个人梳理工具。

## 本地预览

无需构建，直接打开 HTML 即可。需要本地静态服务时可运行：

```powershell
node .\scripts\static-server.mjs
```

默认地址为 `http://localhost:8123`，也可通过 `PORT` 环境变量指定端口。

## 维护说明

- 页面更新规范和目录职责见 [AGENTS.md](./AGENTS.md)。
- SEO、社交分享图和更新记录相关脚本位于 [scripts](./scripts)。
- 新增内容页时通常需要同步首页入口、SEO 映射、更新记录和站点地图。
- 量表、工具和用户导出数据应继续在浏览器本地处理，不应默认新增远程上传或追踪。

常用检查命令：

```powershell
node --check .\update-records.js
node --check .\scripts\static-server.mjs
node --check .\scripts\inject-seo.mjs
node --check .\scripts\inject-og-image.mjs
.\scripts\cleanup-guide-whitespace.ps1
```

## 部署

本项目是静态站点，可部署到 Cloudflare Pages、GitHub Pages、Vercel、Netlify 等静态托管平台。公开 URL 已在 [sitemap.xml](./sitemap.xml) 和 [robots.txt](./robots.txt) 中维护。

## 内容边界

- 本项目内容仅供学习、自我探索和个人理解辅助，不构成医疗、心理、法律或其他专业建议。
- 自评量表、共鸣刻度和互动工具的结果不能替代正式评估、诊断或专业支持。
- 涉及身份、社群和关系议题的内容应以尊重差异、避免污名化和避免替读者下结论为原则。

## 许可协议

本仓库采用双许可：

- 代码与工程文件：MIT License，见 [LICENSE](./LICENSE)。
- 文档及网站预设内容：Creative Commons Attribution 4.0 International（CC BY 4.0），见 [LICENSE-CONTENT.md](./LICENSE-CONTENT.md)。

第三方资源（如字体、外部库、外链素材等）以其原作者或原项目的许可证声明为准。

## 反馈与贡献

欢迎通过 [GitHub Issue](https://github.com/KrelinnBios/PrismSelf/issues) 提交错别字、排版兼容问题、概念解释补充、引用纠错或新内容建议。