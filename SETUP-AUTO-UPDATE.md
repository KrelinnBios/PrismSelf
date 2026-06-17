# GitHub Actions 工作流配置指南

此文件说明如何在您的仓库中启用自动生成 `update-records.js` 的 GitHub Actions。

## 手动创建方法

1. 在 GitHub Web 界面创建文件：`.github/workflows/update-records.yml`

2. 复制以下内容：

```yaml
name: Auto-generate update-records.js

on:
  push:
    branches:
      - main
    paths:
      - '**.html'
      - 'scripts/generate-update-records.mjs'

permissions:
  contents: write

jobs:
  generate-records:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0  # Full history for git log

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Generate update-records.js
        run: node scripts/generate-update-records.mjs

      - name: Check for changes
        id: changes
        run: |
          if git diff --quiet update-records.js; then
            echo "has_changes=false" >> $GITHUB_OUTPUT
          else
            echo "has_changes=true" >> $GITHUB_OUTPUT
          fi

      - name: Commit and push if changed
        if: steps.changes.outputs.has_changes == 'true'
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add update-records.js
          git commit -m "chore: auto-generate update-records.js from Git history"
          git push
```

3. 点击 "Commit changes" 保存

## 工作流说明

- **触发条件**：任何 `.html` 文件或 `scripts/generate-update-records.mjs` 推送到 main 分支时
- **自动操作**：
  1. 检出代码（完整历史用于 git log）
  2. 安装 Node.js 18
  3. 运行生成脚本
  4. 如有变更，自动提交并推送

## 本地 Git 钩子设置

已创建 `.githooks/pre-commit` 文件。要启用本地钩子，运行：

```bash
git config core.hooksPath .githooks
```

之后每次 `git commit` 前会自动生成 `update-records.js`。
