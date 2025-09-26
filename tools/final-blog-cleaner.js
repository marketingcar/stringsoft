#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const blogDir = '/Users/user/Documents/stringsoft/src/content/blog/';
const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

console.log(`Found ${files.length} markdown files for final cleanup\n`);

let totalFixes = 0;
const issuesSummary = [];

files.forEach(file => {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  let fileIssues = [];

  console.log(`Processing: ${file}`);

  // Fix missing spaces before "**Solution:**"
  if (content.includes('quickly.**Solution:**')) {
    content = content.replace(/([^.\n])\*\*Solution:\*\*/g, '$1\n\n**Solution:**');
    fileIssues.push('Fixed missing newlines before **Solution:**');
  }

  // Fix text that got merged with markdown after image tags
  if (content.includes('jpg)Medical')) {
    content = content.replace(/jpg\)([A-Z])/g, 'jpg)\n\n$1');
    fileIssues.push('Fixed text merged after image tags');
  }

  // Fix missing spaces in "**1983**—"
  content = content.replace(/\*\*(\d{4})\*\*—/g, '**$1** —');
  if (originalContent !== content && !fileIssues.includes('Fixed year formatting')) {
    fileIssues.push('Fixed year formatting');
  }

  // Fix AI file paragraph breaks - it's all one long paragraph and needs breaking
  if (file === 'ai-in-veterinary-medicine.md') {
    content = content.replace(
      /StringSoft is at the forefront of this revolution, integrating next-generation AI features directly into our practice management system\. One of the most significant impacts/,
      'StringSoft is at the forefront of this revolution, integrating next-generation AI features directly into our practice management system.\n\nOne of the most significant impacts'
    );
    content = content.replace(
      /This proactive approach to patient safety can be life-saving\.\n?AI also excels at processing/,
      'This proactive approach to patient safety can be life-saving.\n\nAI also excels at processing'
    );
    content = content.replace(
      /get instant, accurate answers\. Beyond clinical applications/,
      'get instant, accurate answers.\n\nBeyond clinical applications'
    );
    content = content.replace(
      /completed in a timely manner\. The integration of AI/,
      'completed in a timely manner.\n\nThe integration of AI'
    );
    fileIssues.push('Fixed paragraph breaks in AI article');
  }

  // Fix split text in DICOM file
  if (content.includes('Veterinarians can quickly retrieve') && content.includes('All data can be accessed')) {
    content = content.replace(
      /- \*\*Improved workflow\*\* — DICOM eliminates the need to struggle with manual filing\.\n\nVeterinarians can quickly retrieve and access images remotely, saving time and energy\.\n- \*\*Easier access\*\* — DICOM provides a more organized and convenient management system for patient information\.\n\nAll data can be accessed/,
      '- **Improved workflow** — DICOM eliminates the need to struggle with manual filing. Veterinarians can quickly retrieve and access images remotely, saving time and energy.\n- **Easier access** — DICOM provides a more organized and convenient management system for patient information. All data can be accessed'
    );
    fileIssues.push('Fixed split text in DICOM benefits section');
  }

  // Fix the final paragraph in DICOM that got merged
  if (content.includes('bulky physical storage files. Finding a company')) {
    content = content.replace(
      /bulky physical storage files\. Finding a company/,
      'bulky physical storage files.\n\nFinding a company'
    );
    fileIssues.push('Fixed merged final paragraph in DICOM');
  }

  // Fix remaining spacing issues with **Solution:**
  content = content.replace(/([a-z])\*\*Solution:\*\*/g, '$1\n\n**Solution:**');

  // Ensure proper list formatting
  content = content.replace(/^-$/gm, '');

  // Fix StringSoft spacing issues at end of documents
  content = content.replace(/contact\*\*StringSoft\*\*/g, 'contact **StringSoft**');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`  ✓ Fixed ${fileIssues.length} issues:`);
    fileIssues.forEach(issue => console.log(`    - ${issue}`));
    issuesSummary.push({ file, issues: fileIssues });
    totalFixes += fileIssues.length;
  } else {
    console.log(`  ✓ No additional issues found`);
  }
});

console.log('\n=== FINAL CLEANUP COMPLETE ===');
console.log(`Total files processed: ${files.length}`);
console.log(`Total issues fixed: ${totalFixes}`);

if (issuesSummary.length > 0) {
  console.log('\nDetailed fix summary:');
  issuesSummary.forEach(({ file, issues }) => {
    console.log(`\n${file}:`);
    issues.forEach(issue => console.log(`  - ${issue}`));
  });
}