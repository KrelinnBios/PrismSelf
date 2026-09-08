# AGENTS.md

本文件适用于整个仓库，作为 AI 编码代理修改页面、内容与工程文件时的项目规范。除非用户另有要求，使用中文回复和说明。

## 项目概览

PrismSelf 是一个中文静态网页知识库，聚焦性别理论、心理概念与人际关系，包含科普指南、概念分析、调查对谈、共鸣刻度、自评量表和关系沟通工具。

- 项目没有构建步骤，页面由原生 HTML、CSS 和 JavaScript 组成。
- `index.html` 是知识图谱式首页和全部内容入口。
- 网站可直接打开，也可部署到任意静态托管平台。
- 页面内容用于学习、自我探索和个人理解辅助，不构成医疗、心理、法律或其他专业建议。
- 代码与工程文件采用 MIT License；有权许可的原创文档和网站预设内容采用 CC BY-NC-SA 4.0。第三方材料和参与者表达按各自权利状态处理。

## 目录与关键文件

| 路径 | 职责 |
| --- | --- |
| `index.html` | 首页、分类导航、搜索与内容卡片 |
| `Analyses/` | 概念辨析、主题分析和对照页面 |
| `Guides/` | 长篇指南、术语表和科普页面 |
| `Topics/` | 调查报告、专题对谈与社群观察页面 |
| `Bingos/` | 共鸣刻度与宾果类互动页面 |
| `Scales/` | 自评量表 |
| `Tools/` | 关系沟通与个人梳理工具 |
| `Glossaries/` | 术语类页面 |
| `scripts/` | 本地预览、批量维护和品牌资源生成脚本 |
| `update-records.js` | 首页“最近更新”日期与页面路径分组 |
| `icon/logo.svg` | 站点图标与 README 展示图 |
| `og-image/` | 社交分享卡片资源 |
| `sitemap.xml`、`robots.txt` | 搜索引擎发现与抓取配置 |

## 开始任务前

- 先读取目标页面、对应分类的共享资源以及首页入口，不根据文件名猜测页面结构。
- 修改内容结论、定义或统计数据前，先核对现有引用和必要语境。
- 修改共享 CSS 或 JavaScript 前，先确认影响范围；共享文件可能同时影响整个分类。
- 优先做最小、可验证的改动，不因为局部需求重排大型 HTML、批量格式化或清理无关页面。
- 涉及新增、删除或重命名页面时，提前确认首页入口、更新记录、站点地图和站内链接需要同步的范围。

## 修改原则

- 保持项目为可独立部署的静态站点，不引入仅在特定后端或框架中可用的功能。
- 使用 UTF-8 保存文本，保留文件原有换行风格；不要因小改动重排整份大型 HTML。
- 优先修改所在分类的共享 CSS 或 JavaScript，但不要为单页特例扩大共享规则的影响范围。
- 保持相对路径可用。分类目录中的页面引用仓库根资源时通常使用 `../`，同目录共享资源使用 `./`。
- 新增交互必须兼顾键盘操作、清晰焦点、移动端布局和深色模式，不只验证桌面浅色主题。
- 不把自评或共鸣结果描述为诊断、医学结论或专业评估。涉及身份和社群的内容应避免污名化、绝对化和替读者下结论。
- 引用、定义和统计数据应保留来源及必要语境；修改结论时同步核对参考资料。
- 用户填写的量表、工具和导出数据应继续在本地处理。未经明确设计与说明，不新增远程上传、分析追踪或隐式网络请求。
- Git diff 只包含本次任务需要的内容，不混入无关格式化、临时文件或生成物。

## 页面维护

### 修改现有页面

- 页面描述、正文标题和首页卡片名称保持一致。
- 浏览器 `<title>` 与 `og:title` 统一为 `PrismSelf - <页面名>`；首页使用 `PrismSelf - 性别·心理·人际`。脚本动态设置 `document.title` 时也必须保留此前缀。
- 检查返回首页、目录锚点、共享样式、脚本和图片路径。
- 页面内容发生实质更新时，将对应路径移动到 `update-records.js` 最新日期分组；同一路径只保留一次。
- 纯格式、拼写或工程调整通常不更新页面日期，除非改变读者可见内容或使用体验。
- 检查移动端、深色模式、键盘操作以及交互状态刷新后的行为。

### 新增页面

- 在 `index.html` 增加入口，并确认分类和搜索关键词合理。
- 添加准确的 description、favicon、Open Graph 和 Twitter Card 元数据。
- 在 `update-records.js` 最新日期分组登记页面路径。
- 在 `sitemap.xml` 添加公开 URL。
- 根据页面类型复用对应目录的共享资源，并检查相对路径。

### 删除或重命名页面

从首页、更新记录、站点地图和所有站内链接中同步移除或替换旧路径。

## 共享资源与缓存

主要共享资源：

- `Analyses/analysis-common.css`：分析页布局、控件、卡片和主题表现。
- `Guides/guide-common.css`：长篇指南正文、标题、表格、导航和响应式表现。
- `Topics/topic-common.css`：话题页共享样式。
- `Bingos/bingo-common.css`：共鸣类页面共享样式。
- `Scales/scale-common.css`、`Scales/scale-common.js`：量表结构、进度和结果区域。
- `Tools/tool-common.css`：工具页共享样式。
- `Glossaries/glossary-common.css`：术语页共享样式。
- 首页目前使用内联样式与脚本；修改首页时要特别留意卡片筛选、最近更新和导航逻辑。

修改共享文件后，提交前至少抽查该分类中结构差异较大的两个页面。

### 静态资源版本号

修改共享 CSS、JavaScript 或图片后，必须同步更新所有引用页面中的 `?v=` 版本号。

| 分组 | 资源 | 影响范围 |
| --- | --- | --- |
| 全局主题 | `assets/theme.css` | 全部 HTML 页面 |
| 全局主题 | `assets/theme.js` | 全部 HTML 页面 |
| 全局图标 | `icon/logo.svg` | 全部 favicon 引用 |
| 社交分享 | `og-image/image.png` | 全部 OG 图片引用 |
| 分析分类 | `Analyses/analysis-common.css` | `Analyses/*.html` |
| 指南分类 | `Guides/guide-common.css` | `Guides/*.html` |
| 话题分类 | `Topics/topic-common.css` | `Topics/*.html` |
| 共鸣分类 | `Bingos/bingo-common.css` | `Bingos/*.html` |
| 量表分类 | `Scales/scale-common.css`、`Scales/scale-common.js` | `Scales/*.html` |
| 工具分类 | `Tools/tool-common.css` | `Tools/*.html` |
| 术语分类 | `Glossaries/glossary-common.css` | `Glossaries/*.html` |

操作规则：

1. 确认改动属于哪个资源分组和影响范围。
2. 生成新版本号，推荐格式为 `YYYYMMDDX`，例如 `202609081`。
3. `theme.css`、`theme.js` 和 favicon 的 `logo.svg` 始终使用同一个版本号；`guide-common.css` 与主题组保持同一版本号。
4. 其他分类共享资源分别独立维护；`og-image/image.png` 使用该文件最新提交的 Unix 时间戳，或与主题组同步。
5. 全仓替换受影响 HTML 中对应资源的旧 `?v=`；OG 图片和 favicon 的 meta/link 引用也必须同步。
6. 完成替换后检查 Git diff，确认没有漏改或误改其他资源组。

只修改单个 HTML 内容本身且未改共享文件时，不需要更新版本号。

### 原因说明

- HTML 已通过缓存控制设置为不缓存，但 CSS、JavaScript 和图片仍可能被浏览器或 CDN 缓存。
- 只有资源 URL 变化时，浏览器才会可靠地重新获取新资源。
- 漏改版本号会造成线上继续加载旧样式或旧脚本，与仓库当前代码不一致。

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
- 默认只报告变化；只有 `-Apply` 会写入文件。
- 只移除行尾空白并压缩重复空行，跳过 `script`、`style`、`pre` 和 `textarea`。
- 先检查 dry-run 输出，应用后再审阅 Git diff。
- 执行策略受限时可使用 `powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\cleanup-guide-whitespace.ps1` 执行同一 dry-run。

品牌图片生成：

```powershell
.\scripts\render-brand-assets.ps1
```

该脚本生成 `og-image/image.png`；本地 favicon 预览文件由 `.gitignore` 排除。

## 验证

根据改动范围执行：

```powershell
node --check .\update-records.js
node --check .\scripts\static-server.mjs
.\scripts\cleanup-guide-whitespace.ps1
```

并人工确认：

- 相关页面能通过本地静态服务器打开，控制台无新增错误。
- 首页入口、站内链接、目录锚点和返回导航有效。
- 页面在窄屏和宽屏下没有明显溢出。
- 浅色与深色主题的文字、边框和交互状态可辨认。
- 键盘可以到达主要控件，焦点状态清晰。
- 新增页面已更新首页、更新记录和站点地图。
- 修改共享资源后，所有受影响页面的版本号已同步。
- Git diff 只包含本次任务所需内容，没有批量格式化或临时生成文件。

仓库目前没有自动化测试套件，对读者可见的页面改动以本地浏览器检查为主要验证方式。

## 文档同步

- `README.md` 面向项目使用者；`AGENTS.md` 只记录编码代理需要遵守的维护规则和项目边界。
- README 主体结构固定为：项目简介 → 功能概览 → 界面预览 → 使用方式 → 隐私与数据 → 内容边界 → 许可协议 → 反馈与贡献。
- 项目简介结尾保留范围或用途说明，但不要和“隐私与数据”重复表述。
- 功能概览使用扁平列表，格式固定为 `- 四字标签：描述。`；标签不加粗且正好四个汉字。
- 顶部 logo 统一使用仓库根目录下的 `icon/logo.svg`。
- 修改公开功能、内容边界、隐私处理、许可证、页面分类或公开 URL 时，检查 README 是否需要同步。

## 提交约定

- 一个提交聚焦一个明确主题，避免把内容更新、视觉重构和批量清理混在一起。
- 提交信息简短说明实际结果。
- 不提交本地预览、编辑器状态、临时导出或与任务无关的生成文件。
- 工作区已有其他修改时，只处理并提交本次任务涉及的内容。