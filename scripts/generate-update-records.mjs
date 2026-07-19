#!/usr/bin/env node
/**
 * Generate update-records.js from Git commit history
 * Groups pages by their last modification date
 * 
 * Usage: node scripts/generate-update-records.mjs
 */

import { execFileSync } from 'node:child_process';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

/**
 * Get the last commit date for a file in YYYY-MM-DD format
 */
function getLastModifiedDate(filePath) {
  try {
    const date = execFileSync('git', ['log', '-1', '--format=%cd', '--date=short', '--', filePath], {
      cwd: repoRoot,
      encoding: 'utf-8'
    }).trim();
    return date || null;
  } catch (e) {
    console.warn(`Warning: Could not get date for ${filePath}`);
    return null;
  }
}

/**
 * Get all HTML files matching patterns
 */
function getAllHtmlFiles() {
  try {
    const output = execFileSync('git', ['ls-files'], {
      cwd: repoRoot,
      encoding: 'utf-8'
    }).trim();
    return output.split('\n').filter(f => f && f.endsWith('.html'));
  } catch (e) {
    console.error('Error getting files from git:', e.message);
    return [];
  }
}

/**
 * Normalize file path for display
 */
function normalizePath(filePath) {
  // 'index.html' -> 'home'
  if (filePath === 'index.html') {
    return 'home';
  }
  // Add './' prefix for relative paths
  return './' + filePath;
}

/**
 * Main function
 */
function main() {
  console.log('🔍 Scanning Git history for file modifications...');

  const files = getAllHtmlFiles();
  console.log(`Found ${files.length} HTML files`);

  const records = {};

  for (const file of files) {
    const date = getLastModifiedDate(file);
    if (!date) continue;

    if (!records[date]) {
      records[date] = [];
    }
    records[date].push(normalizePath(file));
  }

  // Sort by date (newest first)
  const sortedRecords = Object.entries(records)
    .sort((a, b) => new Date(b[0]) - new Date(a[0]))
    .map(([date, pages]) => ({
      date,
      pages: pages.sort()
    }));

  console.log(`\n📊 Created ${sortedRecords.length} date groups`);
  sortedRecords.forEach(record => {
    console.log(`   ${record.date}: ${record.pages.length} pages`);
  });

  // Generate output
  const output = `// Move a page path into a new ISO-date group when its content changes.
window.PrismSelfUpdateGroups = ${JSON.stringify(sortedRecords, null, 2)};
`;

  const outputPath = path.join(repoRoot, 'update-records.js');
  fs.writeFileSync(outputPath, output);

  console.log(`\n✅ Generated ${outputPath}`);
}

main();
