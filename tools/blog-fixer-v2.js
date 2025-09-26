#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const blogDir = '/Users/user/Documents/stringsoft/src/content/blog/';
const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

console.log(`Found ${files.length} markdown files to fix\n`);

files.forEach(file => {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  console.log(`Processing: ${file}`);

  // Fix front matter that got corrupted
  content = content.replace(/^- --\n/gm, '---\n');

  // Fix spacing issues in headings - ensure proper format "#### 1."
  content = content.replace(/^#### (\d+):$/gm, '#### $1.');

  // Fix missing spaces after "Solution:"
  content = content.replace(/\*\*Solution:\*\*([A-Z])/g, '**Solution:**\n\n$1');

  // Fix missing spaces after numbered headings
  content = content.replace(/^#### (\d+)\.\*\*([^*]+)\*\*$/gm, '#### $1. **$2**');

  // Fix text that got joined inappropriately
  content = content.replace(/(\w)\*\*Solution:\*\*/g, '$1\n\n**Solution:**');
  content = content.replace(/(\w)\*\*([A-Z][a-z])/g, '$1 **$2');

  // Fix "StringSoft" spacing
  content = content.replace(/Contact\*\*StringSoft\*\*/g, 'Contact **StringSoft**');

  // Fix orphaned list items
  content = content.replace(/\n-\n/g, '\n\n');

  // Remove any stray characters that might have been introduced
  content = content.replace(/[^\x00-\x7F\u00A0-\u017F\u0100-\u024F\u2010-\u206F\u20A0-\u20CF\u2100-\u218F\u2190-\u21FF\u2200-\u22FF\n\r\t ]/g, '');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`  ✓ Fixed formatting issues`);
  } else {
    console.log(`  ✓ No additional fixes needed`);
  }
});

console.log('\n=== FORMATTING FIX COMPLETE ===');