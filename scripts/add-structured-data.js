#!/usr/bin/env node
/**
 * 为内容页面添加 JSON-LD 结构化数据
 * 
 * 用法: node scripts/add-structured-data.js
 */

const fs = require('fs');
const path = require('path');

const baseUrl = 'https://prismself.vip';
const publisher = {
  "@id": `${baseUrl}/#organization`
};

// 页面类型到 schema.org 类型的映射
const schemaTypes = {
  Guides: 'Article',
  Analyses: 'Article',
  Glossaries: 'DefinedTermSet',
  Topics: 'Article',
  Scales: 'WebApplication',
  Tools: 'WebApplication',
  Bingos: 'WebApplication'
};

// 生成结构化数据
function generateStructuredData(filePath, title, description, category) {
  const url = `${baseUrl}/${filePath}`;
  const schemaType = schemaTypes[category] || 'WebPage';
  
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "url": url,
    "name": title,
    "description": description,
    "inLanguage": "zh-CN",
    "publisher": publisher
  };

  // 根据类型添加特定字段
  if (schemaType === 'Article') {
    baseSchema.headline = title;
    baseSchema.author = publisher;
  } else if (schemaType === 'DefinedTermSet') {
    baseSchema.name = title;
  } else if (schemaType === 'WebApplication') {
    baseSchema.applicationCategory = 'WebApplication';
    baseSchema.browserRequirements = 'Requires JavaScript. Requires HTML5.';
    baseSchema.operatingSystem = 'Any';
  }

  return `  <script type="application/ld+json">
  ${JSON.stringify(baseSchema, null, 2).split('\n').map(line => '  ' + line).join('\n')}
  </script>`;
}

// 从 HTML 提取信息
function extractMetadata(content) {
  const titleMatch = content.match(/<title>PrismSelf - ([^<]+)<\/title>/);
  const descMatch = content.match(/<meta name="description" content="([^"]+)"/);
  
  return {
    title: titleMatch ? titleMatch[1] : '',
    description: descMatch ? descMatch[1] : ''
  };
}

// 检查是否已有结构化数据
function hasStructuredData(content) {
  return content.includes('application/ld+json');
}

// 处理单个文件
function processFile(filePath, category) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⊘ 跳过: ${filePath} (文件不存在)`);
    return false;
  }

  let content = fs.readFileSync(fullPath, 'utf-8');
  
  if (hasStructuredData(content)) {
    console.log(`✓ 跳过: ${filePath} (已有结构化数据)`);
    return false;
  }

  const metadata = extractMetadata(content);
  if (!metadata.title || !metadata.description) {
    console.log(`⚠ 跳过: ${filePath} (缺少必要元数据)`);
    return false;
  }

  const structuredData = generateStructuredData(
    filePath,
    metadata.title,
    metadata.description,
    category
  );

  // 在 </head> 前插入
  const headCloseIndex = content.lastIndexOf('</head>');
  if (headCloseIndex === -1) {
    console.log(`⚠ 跳过: ${filePath} (找不到 </head>)`);
    return false;
  }

  content = content.slice(0, headCloseIndex) + 
            structuredData + '\n' +
            content.slice(headCloseIndex);

  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log(`✓ 已添加: ${filePath}`);
  return true;
}

// 要处理的文件列表
const files = {
  Guides: [
    'Guides/Asexual-Comprehensive-Guide.html',
    'Guides/Aromantic-Comprehensive-Guide.html',
    'Guides/BDSM-Comprehensive-Guide.html',
    'Guides/Demisexual-Comprehensive-Guide.html',
    'Guides/Gender-Concepts-Comprehensive-Guide.html',
    'Guides/Greysexual-Comprehensive-Guide.html'
  ],
  Analyses: [
    'Analyses/Gender-Theory-Panorama.html',
    'Analyses/Interpersonal-Attraction-Comparison.html',
    'Analyses/Interpersonal-Conflict-Analysis.html',
    'Analyses/LGBTQ-Comprehensive-Analysis.html',
    'Analyses/Neutrality-Type-Analysis.html',
    'Analyses/Psychosexual-Concepts-Panorama.html'
  ],
  Glossaries: [
    'Glossaries/Philosophy-Glossary.html',
    'Glossaries/Psychology-Glossary.html',
    'Glossaries/Sexology-Glossary.html',
    'Glossaries/Sociology-Glossary.html',
    'Glossaries/SOGIESC-Glossary.html'
  ],
  Topics: [
    'Topics/A-Conversation-on-Asexuality.html',
    'Topics/Asexual-Community-Survey.html'
  ],
  Scales: [
    'Scales/Aromantic-Spectrum-Scale.html',
    'Scales/Asexual-Spectrum-Scale.html',
    'Scales/Big-Five-Personality-Scale.html',
    'Scales/Feminist-Leanings-Scale.html',
    'Scales/Gender-Exploration-Scale.html',
    'Scales/Neurodiversity-Experience-Scale.html',
    'Scales/Philosophical-Leanings-Scale.html',
    'Scales/Sexual-Orientation-Scale.html',
    'Scales/Sexual-Preference-Scale.html'
  ],
  Tools: [
    'Tools/Relationship-Needs-Menu.html',
    'Tools/Self-Intro-Card.html'
  ],
  Bingos: [
    'Bingos/Aro-Ace-Spectrum-Resonance.html',
    'Bingos/Gender-Spectrum-Resonance.html',
    'Bingos/Neurodiversity-Resonance.html'
  ]
};

// 执行处理
console.log('开始添加结构化数据...\n');
let totalProcessed = 0;

Object.entries(files).forEach(([category, fileList]) => {
  console.log(`\n处理 ${category}:`);
  fileList.forEach(file => {
    if (processFile(file, category)) {
      totalProcessed++;
    }
  });
});

console.log(`\n完成! 共处理 ${totalProcessed} 个文件。`);
