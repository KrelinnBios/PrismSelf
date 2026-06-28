# PrismSelf

<p align="center">
  <img src="favicon.svg" width="128" alt="PrismSelf logo">
</p>

<p align="center">
  <strong>PrismSelf</strong><br>
  面向性别理论、心理概念与人际关系议题的中文自我探索与科普知识库
</p>

## 项目简介

PrismSelf 是一个以静态网页形式呈现的自我探索与科普知识库，聚焦性别理论、心理概念、人际关系与社群议题等内容整理。页面包含知识图谱导航、概念分析、专题指南、调查报告、共鸣刻度、自评量表和关系沟通工具，供访问者学习、整理和个人理解辅助使用。

## 功能概览

- 知识入口：[index.html](./index.html) 提供分类导航、搜索、最近更新和内容卡片。
- 主题分析：[Analyses](./Analyses) 收录概念辨析、主题分析和对照页面。
- 专题指南：[Guides](./Guides) 收录长篇指南、术语表和科普页面。
- 专题内容：[Topics](./Topics) 收录调查报告、专题对谈与社群观察页面。
- 共鸣刻度：[Bingos](./Bingos) 收录共鸣刻度与宾果类互动页面。
- 自评量表：[Scales](./Scales) 收录量表与自评页面。
- 关系工具：[Tools](./Tools) 收录关系沟通与个人梳理工具。

## 使用方式

### 在线访问

访问 <https://prismself.pages.dev/>。

### 本地使用

直接用浏览器打开 [index.html](./index.html)。

如需本地静态服务，可运行：

```powershell
node .\scripts\static-server.mjs
```

默认地址为 `http://localhost:8123`，也可通过 `PORT` 环境变量指定端口。

### 线上部署

本项目是静态网页，可部署到 GitHub Pages、Cloudflare Pages、Vercel、Netlify 等静态网站托管平台。

公开 URL 已在 [sitemap.xml](./sitemap.xml) 和 [robots.txt](./robots.txt) 中维护。

## 技术信息

- 技术栈：HTML、CSS、JavaScript。
- 构建方式：无需构建步骤，静态文件可直接托管。
- 内容组织：页面按 Analyses、Guides、Topics、Bingos、Scales 和 Tools 分类维护。
- 本地数据：量表、工具和用户导出数据继续在浏览器本地处理。
- 辅助脚本：[scripts](./scripts) 中包含本地预览、SEO、OG 图片、更新记录和空白清理相关脚本。
- 维护说明：页面更新规范和目录职责见 [AGENTS.md](./AGENTS.md)。

## 内容边界

- 本项目内容仅供学习、自我探索和个人理解辅助，不构成医疗、心理、法律或其他专业建议。
- 页面中的自评量表、共鸣刻度和互动工具结果不能替代正式评估、诊断或专业支持。
- 涉及身份、社群和关系议题的内容应以尊重差异、避免污名化和避免替读者下结论为原则。
- 访问者在本地填写、记录或导出的个人结果不属于本仓库预设内容，其使用方式由访问者自行决定。

## 许可协议

本仓库采用双许可：

- 代码与工程文件：MIT License，见 [LICENSE](./LICENSE)。
- 文档及网站预设内容：Creative Commons Attribution 4.0 International（CC BY 4.0），见 [LICENSE-CONTENT.md](./LICENSE-CONTENT.md)。

第三方资源（如字体、外部库、外链素材等）以其原作者或原项目的许可证声明为准。

## 反馈与贡献

欢迎通过 [GitHub Issue](https://github.com/KrelinnBios/PrismSelf/issues) 提交错别字、排版兼容问题、概念解释补充、引用纠错或新内容建议。