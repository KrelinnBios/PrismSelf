// One-off SEO injector: adds meta description, theme-color, favicon link and
// Open Graph tags right after each page's <title> line. Idempotent: skips any
// tag that is already present. Preserves BOM and the file's existing newline
// style. Run with: node scripts/inject-seo.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://prismself.pages.dev';
const DEFAULT_THEME = '#2f6f73';

// file -> { desc, title, theme? } ; title falls back to the page's <title>
const pages = {
  'index.html': { desc: '聚焦性别理论、心理概念与人际关系的自我探索与科普知识库，涵盖分析图表、专题指南、共鸣刻度、自评量表与关系对话工具。', url: '/' },
  'Analyses/Gender-Theory-Panorama.html': { desc: '系统梳理性别理论的核心概念，对照定义、流派与争议，帮助厘清性别相关术语与思想脉络。' },
  'Analyses/Interpersonal-Attraction-Comparison.html': { desc: '全景比较多种人际吸引力类型（性、浪漫、感官、智识等），辨析它们的定义与差异。' },
  'Analyses/Interpersonal-Conflict-Analysis.html': { desc: '全面分析人际冲突的概念、成因与应对模式，厘清相关的心理与沟通术语。' },
  'Analyses/LGBTQ-Comprehensive-Analysis.html': { desc: 'LGBTQ+ 核心概念全景辨析，系统对照性取向、性别认同与表达等相关术语与定义。' },
  'Analyses/Neutrality-Type-Analysis.html': { desc: '系统分析各类“中立”立场与权力解构相关概念，辨析其定义、适用范围与边界。' },
  'Analyses/Psychosexual-Concepts-Panorama.html': { desc: '性心理核心概念全景分析，梳理欲望、唤起、依恋等相关术语的定义与彼此关系。' },
  'Bingos/Aro-Ace-Spectrum-Resonance.html': { desc: '无浪漫/无性恋谱系共鸣刻度卡，通过条目自评感受谱系认同与共鸣程度。' },
  'Bingos/Gender-Spectrum-Resonance.html': { desc: '性别身份与认同光谱共鸣刻度卡，通过条目自评探索性别体验与认同。' },
  'Bingos/Neurodiversity-Resonance.html': { desc: '神经多样性共鸣刻度卡，通过条目自评感受神经多样性相关体验的共鸣程度。' },
  'Guides/Asexual-Community-Survey.html': { desc: '无性恋社群现状与需求调查报告，呈现社群构成、处境与支持需求等数据与解读。' },
  'Guides/Asexual-Comprehensive-Guide.html': { desc: '无性恋全景指南，系统介绍无性恋的定义、谱系、常见误解与社群资源。' },
  'Guides/BDSM-Comprehensive-Guide.html': { desc: 'BDSM 全景指南，系统介绍核心概念、安全原则、角色倾向、偏好测试解读、知情同意与风险管理。' },
  'Guides/Demisexual-Comprehensive-Guide.html': { desc: '半性恋全景指南，系统介绍半性恋的定义、谱系定位、常见误解与自我认同。' },
  'Guides/Gender-Concepts-Terminology.html': { desc: '性别概念与术语指南，系统解释性别认同、性别表达与相关核心术语。' },
  'Guides/Greysexual-Comprehensive-Guide.html': { desc: '灰性恋全景指南，系统介绍灰性恋的定义、谱系定位、常见误解与社群语境。' },
  'Guides/SOGIESC-Glossary.html': { desc: 'SOGIESC 术语表，系统解释性取向、性别认同与表达以及性别特征相关术语。' },
  'Scales/Aromantic-Spectrum-Scale.html': { desc: '无浪漫谱系自评量表，通过多维条目帮助你探索浪漫吸引相关的自我倾向；结果仅保存在本地。' },
  'Scales/Asexual-Spectrum-Scale.html': { desc: '无性恋谱系自评量表，通过多维条目帮助你探索性吸引相关的自我倾向；结果仅保存在本地。' },
  'Scales/Feminist-Leanings-Scale.html': { desc: '女权主义流派倾向自评量表，帮助你了解自身在各女权主义流派上的倾向；结果仅保存在本地。' },
  'Scales/Gender-Exploration-Scale.html': { desc: '多元性别认同与探索自评量表，通过多维条目辅助性别体验的自我梳理；结果仅保存在本地。' },
  'Scales/Philosophical-Leanings-Scale.html': { desc: '哲学流派倾向自评量表，帮助你了解自身在各哲学流派上的倾向；结果仅保存在本地。' },
  'Scales/Sexual-Orientation-Scale.html': { desc: '性取向自评量表，通过多维条目帮助你探索性取向相关的自我倾向；结果仅保存在本地。' },
  'Tools/Relationship-Needs-Menu.html': { desc: '关系需求菜单，一个用于梳理和沟通亲密关系需求与边界的互动对话工具。' },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

let changed = 0;
for (const [rel, meta] of Object.entries(pages)) {
  const abs = join(root, rel);
  let html = readFileSync(abs, 'utf8');

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
  if (!titleMatch) { console.warn('NO <title>:', rel); continue; }
  const title = titleMatch[1].trim();
  const depth = rel.includes('/') ? '../' : '';
  const url = SITE + (meta.url || '/' + rel.replace(/\\/g, '/'));

  const hasDesc = /name=["']description["']/.test(html);
  const hasOg = /property=["']og:/.test(html);
  const hasOgImage = /property=["']og:image["']/.test(html);
  const hasTwitter = /name=["']twitter:card["']/.test(html);
  const hasTheme = /name=["']theme-color["']/.test(html);
  const hasIcon = /rel=["']icon["']/.test(html);

  const lines = [];
  if (!hasDesc) lines.push(`<meta name="description" content="${esc(meta.desc)}">`);
  if (!hasTheme) lines.push(`<meta name="theme-color" content="${meta.theme || DEFAULT_THEME}">`);
  if (!hasIcon) lines.push(`<link rel="icon" href="${depth}favicon.svg" type="image/svg+xml">`);
  if (!hasOg) {
    lines.push(`<meta property="og:type" content="website">`);
    lines.push(`<meta property="og:site_name" content="PrismSelf">`);
    lines.push(`<meta property="og:title" content="${esc(title)}">`);
    lines.push(`<meta property="og:description" content="${esc(meta.desc)}">`);
    lines.push(`<meta property="og:url" content="${esc(url)}">`);
    lines.push(`<meta property="og:locale" content="zh_CN">`);
  }
  // og:image is checked independently: a page may already carry other og: tags
  // without a share image, so it must not be gated behind hasOg.
  if (!hasOgImage) {
    lines.push(`<meta property="og:image" content="${SITE}/og-image.png">`);
    lines.push(`<meta property="og:image:width" content="1200">`);
    lines.push(`<meta property="og:image:height" content="630">`);
  }
  if (!hasTwitter) lines.push(`<meta name="twitter:card" content="summary_large_image">`);
  if (lines.length === 0) { console.log('skip (already complete):', rel); continue; }

  // Insert after the whole line that contains </title>, matching its indent and newline style.
  const re = /([ \t]*)(<title>[\s\S]*?<\/title>)([^\n]*)(\r?\n)/;
  if (!re.test(html)) { console.warn('title not on its own line, skipping:', rel); continue; }
  html = html.replace(re, (m, indent, t, rest, nl) => {
    const block = lines.map((l) => indent + l + nl).join('');
    return indent + t + rest + nl + block;
  });
  writeFileSync(abs, html);
  changed++;
  console.log('updated:', rel, `(+${lines.length} tags)`);
}
console.log(`\nDone. ${changed} file(s) updated.`);
