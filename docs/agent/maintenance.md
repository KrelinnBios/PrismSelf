# PrismSelf · 维护脚本、索引检查、开发环境与实机验收

本文件是本仓库的专项维护规则。根目录 [AGENTS.md](../../AGENTS.md) 的项目状态与全局边界继续有效。

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
