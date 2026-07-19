# 第三方软件、内容与服务说明

本文件补充 [LICENSE](./LICENSE) 和 [LICENSE-CONTENT.md](./LICENSE-CONTENT.md)，用于说明 PrismSelf 所使用、但不由本项目 MIT License 或 CC BY-NC-SA 4.0 重新授权的第三方软件、内容、数据和外部服务。具体组件、文件或内容旁如有更明确的权利声明，以该声明为准。

## 第三方软件与资源

- [Chart.js 4.4.1](https://github.com/chartjs/Chart.js)：`MIT`，通过 cdnjs 加载。
- [html2canvas 1.4.1](https://github.com/niklasvh/html2canvas)：`MIT`，通过 cdnjs 加载。
- 通过 Google Fonts 加载的 Noto Sans SC、Noto Serif SC、Inter、DM Sans、DM Mono、Cormorant Garamond 和 Space Mono 等字体：分别适用其上游字体许可证及 Google Fonts 服务条款。

上述软件和字体不会因为被本项目引用而改用 PrismSelf 的 MIT License 或 CC BY-NC-SA 4.0。

## 量表来源与权利说明

### IPIP-NEO-120 与 PrismSelf 大五人格倾向自评量表

[International Personality Item Pool（IPIP）官方权限说明](https://ipip.ori.org/newPermission.htm)称，IPIP 的题目、量表和题库已置于公有领域，可用于商业或非商业目的，也可复制、编辑和翻译。

[PrismSelf 大五人格倾向自评量表](./Scales/Big-Five-Personality-Scale.html)及其[预设内容脚本](./Scales/scripts/big-five-personality-scale.js)参考 IPIP-NEO-120 的五个维度与三十个分面框架。页面中的 120 道中文情境题、题目解释、示例、结果文案、图表说明和内容编排均由 PrismSelf 独立编写；这些原创表达在本项目有权许可的范围内采用 CC BY-NC-SA 4.0。相关 HTML、CSS 和 JavaScript 的通用程序实现采用 MIT License。

IPIP 公有领域材料本身不因收录于本仓库而采用 CC BY-NC-SA 4.0。

该页面没有翻译或改写 IPIP-NEO-120 的具体题目，也不是 IPIP-NEO-120 的官方中文版，且未经相关机构或作者认证；页面中的题目、计分方式和结果解释不代表 IPIP、Oregon Research Institute 或相关研究者的认可或背书。

### HEXACO 人格模型与 PrismSelf HEXACO 六维人格倾向自评量表

HEXACO 人格模型及 HEXACO-PI-R 由 Kibeom Lee 与 Michael C. Ashton 开发。[HEXACO 官方量表页面](https://hexaco.org/hexaco-inventory)对官方量表材料的下载、研究使用和在线施测设有专门条件，并要求非学术用途联系作者。

[PrismSelf HEXACO 六维人格倾向自评量表](./Scales/HEXACO-Personality-Scale.html)及其[预设内容脚本](./Scales/scripts/hexaco-personality-scale.js)参考 HEXACO 六维人格模型及其公开的维度与分面框架。页面中的 100 道中文情境题、题目解释、示例、结果文案、图表说明和内容编排均由 PrismSelf 独立编写；这些原创表达在本项目有权许可的范围内采用 CC BY-NC-SA 4.0。相关 HTML、CSS 和 JavaScript 的通用程序实现采用 MIT License。

该页面没有翻译或改写 HEXACO-PI-R 的具体题目，也不是 HEXACO-PI-R 的官方中文版，且未经相关机构或作者认证；页面中的题目、计分方式和结果解释不代表 Kibeom Lee、Michael C. Ashton 或其他 HEXACO-PI-R 相关权利人的认可或背书。

本项目的 MIT License 和 CC BY-NC-SA 4.0 均不涵盖 HEXACO-PI-R 的官方题目、评分键、手册、官方翻译或其他第三方量表材料；希望使用这些官方材料的使用者，应自行核对官方条件并在需要时联系量表作者。

## 参与者内容与数据

[无性恋专题对谈](./Topics/A-Conversation-on-Asexuality.html)中由“杂粮”说出的回答和其他可归属于对谈参与者的原始表达，不纳入 PrismSelf 的 CC BY-NC-SA 4.0 内容许可。PrismSelf 只对自己有权许可的编辑导语、提问和页面编排适用 CC BY-NC-SA 4.0。

[《无性恋社群现状与需求调查》](./Topics/Asexual-Community-Survey.html)由 PrismSelf 发起并完成问卷设计、数据整理、分析与报告撰写。其中，由 PrismSelf 创作并有权许可的说明文字、分析、结论、图表表达及内容编排采用 CC BY-NC-SA 4.0。该许可不适用于受访者的原始回答、未公开原始数据和个人信息；匿名汇总数字及其他事实性结果本身也不因本声明受到额外限制。

公开展示参与者内容不等于参与者同意第三方以开放许可复制、改编或商业使用其表达。使用者仍须尊重隐私、个人信息和其他人格利益，并在需要时另行取得相应权利人的许可。

## 外部服务

部分页面运行时会连接 cdnjs 和 Google Fonts 下载脚本或字体。这些服务的可用性、日志处理、隐私政策和服务条款由各自运营方负责。

`Guides/` 下的页面提供可选的 AI 陪读。只有访问者主动提交问题时，页面才会将问题和为回答选取的本页摘录发送至 [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/)；当前使用的模型为 Cloudflare 托管的 [`@cf/qwen/qwen3-30b-a3b-fp8`](https://developers.cloudflare.com/workers-ai/models/qwen3-30b-a3b-fp8/)。模型、推理服务及其上游材料适用各自的许可、服务条款和数据处理规则，不因本项目调用而纳入 PrismSelf 的 MIT License 或 CC BY-NC-SA 4.0。

PrismSelf 不将 AI 陪读问题或回答写入本站存储，也不在服务端日志中主动记录问题正文。Cloudflare 仍会为提供 Workers AI 服务而处理相应内容，具体边界以其[数据使用说明](https://developers.cloudflare.com/workers-ai/platform/data-usage/)和适用条款为准。访问者不应在问题中提交可识别个人身份的敏感信息。

## 版本与反馈

实际加载的资源、版本和地址以相应 HTML 页面为准。

完整许可证文本及上游版权声明以各项目发布内容为准；本文中的许可证标识和链接仅用于定位，不替代相应许可证正文。

本项目使用或展示第三方材料，不代表 PrismSelf 有权对其重新许可，也不代表相关权利人对本项目作出认可或背书。如发现版本、来源或权利标注不完整，请通过仓库反馈渠道指出相应组件、页面或内容。
