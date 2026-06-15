# PrismSelf 项目维护指南

本文适用于整个仓库，供维护者和自动化编码代理在修改页面、内容与工程文件时参考。

## 项目定位

PrismSelf 是一个中文静态网页知识库，聚焦性别理论、心理概念与人际关系，包含科普指南、概念分析、共鸣刻度、自评量表和关系沟通工具。

- 项目没有构建步骤，页面由原生 HTML、CSS 和 JavaScript 组成。
- `index.html` 是知识图谱式首页和全部内容入口。
- 网站可直接打开，也可部署到任意静态托管平台。
- 页面内容用于学习、自我探索和个人理解辅助，不构成医疗、心理、法律或其他专业建议。
- 代码与工程文件采用 MIT License；文档和网站预设内容采用 CC BY 4.0。

## 目录职责

| 路径 | 职责 |
| --- | --- |
| `index.html` | 首页、分类导航、搜索与内容卡片 |
| `Analyses/` | 概念辨析、主题分析和对照页面；共享样式为 `analysis-common.css` |
| `Guides/` | 长篇指南、术语表和调查报告；共享样式为 `guide-common.css` |
| `Bingos/` | 共鸣刻度与宾果类互动页面 |
| `Scales/` | 自评量表；共享资源为 `scale-common.css` 和 `scale-common.js` |
| `Tools/` | 关系沟通与个人梳理工具 |
| `scripts/` | 本地预览、批量维护和品牌资源生成脚本 |
| `update-records.js` | 首页“最近更新”日期与页面路径分组 |
| `favicon.svg`、`og-image.*` | 站点图标和社交分享图 |
| `sitemap.xml`、`robots.txt` | 搜索引擎发现与抓取配置 |

## 修改原则

1. 保持项目为可独立部署的静态站点，不引入仅在特定后端或框架中可用的功能。
2. 使用 UTF-8 保存文本，保留文件原有换行风格；不要因为小改动重排整份大型 HTML。
3. 优先修改所在分类的共享 CSS 或 JavaScript，但不要为单页特例扩大共享规则的影响范围。
4. 保持相对路径可用。分类目录中的页面引用仓库根资源时通常需要 `../`，同目录共享资源使用 `./`。
5. 新增交互应支持键盘操作、清晰焦点、移动端布局和深色模式；不要只验证桌面浅色主题。
6. 不把自评或共鸣结果描述为诊断、医学结论或专业评估。涉及身份和社群的内容应避免污名化、绝对化和替读者下结论。
7. 引用、定义和统计数据应保留来源及必要语境；修改结论时同步核对参考资料。
8. 用户填写的量表、工具和导出数据应继续在本地处理。未经明确设计与说明，不要新增远程上传、分析追踪或隐式网络请求。

## 页面更新

修改现有内容页时：

1. 保持页面 `<title>`、描述、正文标题和首页卡片名称一致。
2. 检查站内返回首页、目录锚点、共享样式、脚本和图片路径。
3. 如果页面内容发生实质更新，将对应路径移动到 `update-records.js` 最新日期分组；同一路径只保留一次。
4. 纯格式、拼写或工程调整通常不需要更新页面日期，除非它改变了读者可见内容或使用体验。
5. 检查移动端、深色模式、键盘操作，以及交互状态刷新后的行为。

新增内容页时，还需要同步：

1. 在 `index.html` 增加入口，并确认分类和搜索关键词合理。
2. 在 `scripts/inject-seo.mjs` 的 `pages` 映射中补充准确的页面描述。
3. 添加完整的 description、favicon、Open Graph 和 Twitter Card 元数据。
4. 在 `update-records.js` 最新日期分组登记页面路径。
5. 在 `sitemap.xml` 添加公开 URL。
6. 根据页面类型复用对应目录的共享资源，并检查相对路径。

删除或重命名页面时，应从首页、更新记录、SEO 映射、站点地图和所有站内链接中同步移除或替换旧路径。

## 共享资源

- `Analyses/analysis-common.css` 统一分析页的布局、控件、卡片和主题表现。
- `Guides/guide-common.css` 统一长篇指南的正文、标题、表格、导航和响应式表现。
- `Scales/scale-common.css` 与 `Scales/scale-common.js` 统一量表结构、进度和结果区域。
- 首页目前使用内联样式与脚本；修改首页时要特别留意卡片筛选、最近更新和导航逻辑。
- 共享文件的改动会影响整个分类，提交前至少抽查该分类中结构差异较大的两个页面。

## 维护脚本

本地静态预览：

```powershell
node .\scripts\static-server.mjs
```

默认地址为 `http://localhost:8123`，可通过 `PORT` 环境变量覆盖。

大型指南空白清理：

```powershell
.\scripts\cleanup-guide-whitespace.ps1
.\scripts\cleanup-guide-whitespace.ps1 -Apply
```

- 只扫描 `Guides/` 下不小于 64 KiB 的 HTML。
- 默认仅报告将发生的变化；只有 `-Apply` 会写入文件。
- 只移除行尾空白并压缩重复空行，跳过 `script`、`style`、`pre` 和 `textarea`。
- 应先检查 dry-run 输出，应用后再审阅 Git diff，避免把无关格式变化混入内容提交。
- 如果本机执行策略禁止直接运行 `.ps1`，可用 `powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\cleanup-guide-whitespace.ps1` 执行同一 dry-run。

品牌图片生成：

```powershell
.\scripts\render-brand-assets.ps1
```

它会生成根目录的 `og-image.png`。本地 favicon 预览文件已由 `.gitignore` 排除。

`scripts/inject-seo.mjs` 和 `scripts/inject-og-image.mjs` 是一次性批量迁移脚本。它们会直接写入多个 HTML，不应作为日常检查命令运行；确需使用时，先确认映射和影响范围，运行后逐文件审阅差异。

## 检查清单

提交前根据改动范围执行：

```powershell
node --check .\update-records.js
node --check .\scripts\static-server.mjs
node --check .\scripts\inject-seo.mjs
node --check .\scripts\inject-og-image.mjs
.\scripts\cleanup-guide-whitespace.ps1
```

并人工确认：

- 相关页面能通过本地静态服务器打开，控制台无新增错误。
- 首页入口、站内链接、目录锚点和返回导航有效。
- 页面在窄屏和宽屏下没有明显溢出。
- 浅色与深色主题的文字、边框和交互状态可辨认。
- 键盘可以到达主要控件，焦点状态清晰。
- 新增页面已更新首页、SEO 映射、更新记录和站点地图。
- Git diff 只包含本次任务所需内容，没有批量格式化或生成的临时文件。

仓库目前没有自动化测试套件。对读者可见的页面改动，以本地浏览器检查为主要验证方式。

## 提交约定

- 一个提交聚焦一个明确主题，避免把内容更新、视觉重构和批量清理混在一起。
- 提交信息简短说明结果，例如 `Document project maintenance workflow`。
- 不提交本地预览、编辑器状态、临时导出或与任务无关的生成文件。
- 在工作区已有其他改动时，只暂存本次任务涉及的文件。
