# PrismSelf · 共享 CSS、JS、静态资源、版本哈希与缓存一致性

本文件是本仓库的专项维护规则。根目录 [AGENTS.md](../../AGENTS.md) 的项目状态与全局边界继续有效。

## 共享资源与缓存

主要共享资源：

- `Analyses/analysis-common.css`、`Analyses/analysis-common.js`：分析页布局、控件、卡片和主题表现；脚本统一处理筛选栏、参考文献跳转、详情弹窗焦点与筛选按钮状态。
- `Guides/guide-common.css`：长篇指南正文、标题、表格、导航和响应式表现。
- `Guides/guide-common.js`：除 BDSM 外的指南页把 Typora 正文重排为卡片版式并生成目录，各页只传入目录文案等配置。
- `Topics/topic-common.css`：话题页共享样式。
- `Bingos/bingo-common.css`：共鸣类页面共享样式。
- `Scales/scale-common.css`、`Scales/scale-common.js`：量表结构、进度和结果区域。
- `Tools/tool-common.css`：工具页共享样式。
- `Glossaries/glossary-common.css`：术语页共享样式。
- `Glossaries/glossary-common.js`：哲学、心理学、性学、社会学术语页的搜索、筛选与渲染逻辑；SOGIESC 页使用自带的分类重排逻辑。
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
| 分析分类 | `Analyses/analysis-common.css`、`Analyses/analysis-common.js` | `Analyses/*.html` |
| 指南分类 | `Guides/guide-common.css` | `Guides/*.html` |
| 指南分类 | `Guides/guide-common.js` | 除 BDSM 外的 `Guides/*.html` |
| 话题分类 | `Topics/topic-common.css` | `Topics/*.html` |
| 共鸣分类 | `Bingos/bingo-common.css`、`Bingos/bingo-common.js` | `Bingos/*.html` |
| 量表分类 | `Scales/scale-common.css`、`Scales/scale-common.js` | `Scales/*.html` |
| 工具分类 | `Tools/tool-common.css` | `Tools/*.html` |
| 术语分类 | `Glossaries/glossary-common.css` | `Glossaries/*.html` |
| 术语分类 | `Glossaries/glossary-common.js` | 除 SOGIESC 外的 `Glossaries/*.html` |

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
