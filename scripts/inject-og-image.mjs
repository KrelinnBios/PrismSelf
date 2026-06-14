// One-off: add og:image + twitter:card after each page's og:locale line.
// Idempotent: skips files that already have og:image. Run: node scripts/inject-og-image.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const IMG = 'https://prismself.pages.dev/og-image.png';
const files = execSync('git ls-files "*.html"', { cwd: root }).toString().trim().split(/\r?\n/);

let changed = 0;
for (const rel of files) {
  const abs = join(root, rel);
  let html = readFileSync(abs, 'utf8');
  if (/property=["']og:image["']/.test(html)) { console.log('skip (has og:image):', rel); continue; }
  const re = /([ \t]*)<meta property="og:locale"[^>]*>(\r?\n)/;
  if (!re.test(html)) { console.warn('no og:locale, skipping:', rel); continue; }
  html = html.replace(re, (m, indent, nl) => {
    const block = [
      `<meta property="og:image" content="${IMG}">`,
      `<meta property="og:image:width" content="1200">`,
      `<meta property="og:image:height" content="630">`,
      `<meta name="twitter:card" content="summary_large_image">`,
    ].map((l) => indent + l + nl).join('');
    return m + block;
  });
  writeFileSync(abs, html);
  changed++;
  console.log('updated:', rel);
}
console.log(`\nDone. ${changed} file(s) updated.`);
