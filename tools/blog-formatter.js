#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const blogDir = '/Users/user/Documents/stringsoft/src/content/blog/';

// Get all markdown files
const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

console.log(`Found ${files.length} markdown files to process\n`);

let totalFixesCount = 0;
const fixSummary = {
  brokenHeadings: 0,
  spacingAfterHeadings: 0,
  boldFormatting: 0,
  lineBreakIssues: 0,
  splitText: 0,
  htmlRemoval: 0,
  weirdCharacters: 0,
  inconsistentHeadings: 0
};

files.forEach(file => {
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  let cleanedContent = content;
  let fileFixesCount = 0;

  console.log(`Processing: ${file}`);

  // Fix broken headings like "###D\n\nICOM" -> "### DICOM"
  const brokenHeadingMatches = cleanedContent.match(/###[A-Z]\n\n[A-Z]+/g);
  if (brokenHeadingMatches) {
    brokenHeadingMatches.forEach(match => {
      const letter = match.charAt(3);
      const restOfWord = match.split('\n\n')[1];
      const fixedHeading = `### ${letter}${restOfWord}`;
      cleanedContent = cleanedContent.replace(match, fixedHeading);
      fixSummary.brokenHeadings++;
      fileFixesCount++;
    });
  }

  // Fix headings that have no space after ###
  cleanedContent = cleanedContent.replace(/^(#{1,6})([^\s#])/gm, '$1 $2');
  if (content !== cleanedContent) {
    fixSummary.spacingAfterHeadings++;
    fileFixesCount++;
  }

  // Fix bold formatting issues like "**1983 **—" -> "**1983** —"
  cleanedContent = cleanedContent.replace(/\*\*([^*]+)\s+\*\*/g, '**$1**');
  if (content !== cleanedContent) {
    fixSummary.boldFormatting++;
    fileFixesCount++;
  }

  // Fix split text issues where content is inappropriately split across lines
  // This handles cases like "text.\nVeterinarians can" -> "text. Veterinarians can"
  cleanedContent = cleanedContent.replace(/([.!?])\n([A-Z][a-z])/g, '$1 $2');
  if (content !== cleanedContent) {
    fixSummary.splitText++;
    fileFixesCount++;
  }

  // Fix line break issues - remove excessive blank lines (more than 2 consecutive)
  cleanedContent = cleanedContent.replace(/\n{3,}/g, '\n\n');
  if (content !== cleanedContent) {
    fixSummary.lineBreakIssues++;
    fileFixesCount++;
  }

  // Fix heading inconsistencies - ensure all headings have proper spacing
  cleanedContent = cleanedContent.replace(/^(#{1,6})\s*([^\n]+)$/gm, (match, hashes, text) => {
    return `${hashes} ${text.trim()}`;
  });

  // Remove any remaining HTML tags
  const htmlRegex = /<[^>]*>/g;
  if (htmlRegex.test(cleanedContent)) {
    cleanedContent = cleanedContent.replace(htmlRegex, '');
    fixSummary.htmlRemoval++;
    fileFixesCount++;
  }

  // Fix weird characters and emoji codes
  cleanedContent = cleanedContent.replace(/[^\x00-\x7F\u00A0-\u017F\u0100-\u024F\u2010-\u206F\u20A0-\u20CF\u2100-\u218F\u2190-\u21FF\u2200-\u22FF]/g, '');
  if (content !== cleanedContent) {
    fixSummary.weirdCharacters++;
    fileFixesCount++;
  }

  // Fix specific broken patterns found in the sample files
  cleanedContent = cleanedContent.replace(/####(\d+):/g, '#### $1.');
  cleanedContent = cleanedContent.replace(/###Must-/g, '### Must ');
  cleanedContent = cleanedContent.replace(/###How/g, '### How');

  // Clean up any double spaces
  cleanedContent = cleanedContent.replace(/  +/g, ' ');

  // Ensure proper spacing around list items
  cleanedContent = cleanedContent.replace(/^-([^\s])/gm, '- $1');

  // Fix "String\n\nSoft" pattern to "StringSoft"
  cleanedContent = cleanedContent.replace(/String\s*\n\s*Soft/g, 'StringSoft');
  if (content !== cleanedContent) {
    fixSummary.splitText++;
    fileFixesCount++;
  }

  // Write the cleaned content back to the file
  fs.writeFileSync(filePath, cleanedContent);

  if (fileFixesCount > 0) {
    console.log(`  ✓ Applied ${fileFixesCount} fixes`);
    totalFixesCount += fileFixesCount;
  } else {
    console.log(`  ✓ No issues found`);
  }
});

console.log('\n=== FORMATTING CLEANUP COMPLETE ===');
console.log(`Total files processed: ${files.length}`);
console.log(`Total fixes applied: ${totalFixesCount}`);
console.log('\nBreakdown of fixes:');
console.log(`- Broken headings fixed: ${fixSummary.brokenHeadings}`);
console.log(`- Heading spacing fixed: ${fixSummary.spacingAfterHeadings}`);
console.log(`- Bold formatting fixed: ${fixSummary.boldFormatting}`);
console.log(`- Split text fixed: ${fixSummary.splitText}`);
console.log(`- Line breaks cleaned: ${fixSummary.lineBreakIssues}`);
console.log(`- HTML removed: ${fixSummary.htmlRemoval}`);
console.log(`- Weird characters removed: ${fixSummary.weirdCharacters}`);