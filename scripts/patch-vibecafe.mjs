/* 批量把页面中的 v1.js 第三方脚本引用替换为本地 vibecafe-shim.js
   用法：node .\scripts\patch-vibecafe.mjs
   只做 dry-run 预览：node .\scripts\patch-vibecafe.mjs --dry
*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const dry = process.argv.includes('--dry');

function walk(dir, acc = []) {
    for (const name of fs.readdirSync(dir)) {
        const p = path.join(dir, name);
        const st = fs.statSync(p);
        if (st.isDirectory()) walk(p, acc);
        else if (name.endsWith('.html')) acc.push(p);
    }
    return acc;
}

const allHtml = walk(ROOT);
let touched = 0;

const OLD_PATTERN = /<script(\s[^>]*?)src="https:\/\/vibecafe\.ai\/telemetry\/v1\.js"([^>]*)>\s*<\/script>/g;

for (const file of allHtml) {
    const src = fs.readFileSync(file, 'utf8');
    if (!OLD_PATTERN.test(src)) continue;
    OLD_PATTERN.lastIndex = 0;

    const relRoot = path.relative(path.dirname(file), ROOT).replace(/\\/g, '/') || '.';
    const shimPath = `${relRoot}/scripts/vibecafe-shim.js`;

    const next = src.replace(OLD_PATTERN, (m, before, after) => {
        return `<script${before || ''}src="${shimPath}"${after || ''}></script>`;
    });

    if (next === src) continue;
    const rel = path.relative(ROOT, file);
    if (dry) {
        console.log('[dry]', rel, '→', shimPath);
    } else {
        fs.writeFileSync(file, next, 'utf8');
        console.log('patched', rel);
    }
    touched++;
}

console.log(`\n${dry ? '[dry] ' : ''}total patched: ${touched}`);
