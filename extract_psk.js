const fs = require('fs');

const content = fs.readFileSync('psk_treatise_v43.js', 'utf8');

let markdown = `---
layout: paper
title: "Proper Space Kinematics"
subtitle: "An Interpretive Framework for Spatial Mechanics"
author: "Murray Leon Kopit"
version: "43"
status: "Preprint"
---

`;

// Find the start of the Introduction (skip title page and TOC)
const introStart = content.indexOf('// Introduction');
if (introStart === -1) {
  console.error('Could not find Introduction section');
  process.exit(1);
}

// Extract from Introduction onwards
const workingContent = content.substring(introStart);

// Split into paragraph blocks
const paragraphRegex = /new Paragraph\(\{([^}]+)\}\)/gs;
let match;
let lastIndex = 0;

// We'll process the content more carefully by finding complete Paragraph blocks
const lines = workingContent.split('\n');
let inParagraph = false;
let currentParagraphLines = [];
let paragraphIndent = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Skip comments
  if (line.trim().startsWith('//')) continue;

  // Detect start of paragraph
  if (line.includes('new Paragraph({')) {
    if (inParagraph && currentParagraphLines.length > 0) {
      // Process previous paragraph
      markdown += processParagraph(currentParagraphLines.join('\n')) + '\n\n';
    }
    inParagraph = true;
    currentParagraphLines = [line];
    paragraphIndent = line.search(/\S/);
    continue;
  }

  // If in paragraph, collect lines
  if (inParagraph) {
    currentParagraphLines.push(line);

    // Check for end of paragraph (closing brace at same indent level)
    if (line.trim() === '}),' || line.trim() === '})') {
      // Process this paragraph
      markdown += processParagraph(currentParagraphLines.join('\n')) + '\n\n';
      currentParagraphLines = [];
      inParagraph = false;
    }
  }
}

// Process any remaining paragraph
if (currentParagraphLines.length > 0) {
  markdown += processParagraph(currentParagraphLines.join('\n')) + '\n\n';
}

// Clean up multiple consecutive newlines
markdown = markdown.replace(/\n{3,}/g, '\n\n').trim() + '\n';

// Write output
fs.writeFileSync('_papers/proper-space-kinematics.md', markdown);
console.log('Extracted to _papers/proper-space-kinematics.md');
console.log('Total length:', markdown.length, 'characters');

function processParagraph(paragraphText) {
  // Check for heading
  const h1Match = paragraphText.match(/heading:\s*HeadingLevel\.HEADING_1.*?children:\s*\[new TextRun\("([^"]+)"\)\]/s);
  if (h1Match) {
    const title = h1Match[1];
    const anchor = title.toLowerCase()
      .replace(/[''""]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    return `## ${title}\n{: #${anchor}}`;
  }

  const h2Match = paragraphText.match(/heading:\s*HeadingLevel\.HEADING_2.*?children:\s*\[new TextRun\("([^"]+)"\)\]/s);
  if (h2Match) {
    return `### ${h2Match[1]}`;
  }

  const h3Match = paragraphText.match(/heading:\s*HeadingLevel\.HEADING_3.*?children:\s*\[new TextRun\("([^"]+)"\)\]/s);
  if (h3Match) {
    return `#### ${h3Match[1]}`;
  }

  // Check for PageBreak
  if (paragraphText.includes('PageBreak')) {
    return '';
  }

  // Extract children array content
  const childrenMatch = paragraphText.match(/children:\s*\[(.*?)\]/s);
  if (!childrenMatch) {
    return '';
  }

  const childrenContent = childrenMatch[1];

  // Extract all TextRun instances
  const textRuns = [];
  const textRunRegex = /new TextRun\((?:"([^"]+)"|(\{[^}]*text:\s*"([^"]+)"[^}]*\}))\)/g;

  let textMatch;
  while ((textMatch = textRunRegex.exec(childrenContent)) !== null) {
    if (textMatch[1]) {
      // Simple TextRun("text")
      textRuns.push({ text: textMatch[1], bold: false, italics: false });
    } else if (textMatch[2]) {
      // Complex TextRun({ text: "text", ... })
      const propsText = textMatch[2];
      const textContentMatch = propsText.match(/text:\s*"([^"]+)"/);
      if (textContentMatch) {
        const text = textContentMatch[1];
        const isBold = propsText.includes('bold: true');
        const isItalics = propsText.includes('italics: true');
        textRuns.push({ text, bold: isBold, italics: isItalics });
      }
    }
  }

  // Build the paragraph text
  let result = '';
  for (const run of textRuns) {
    let text = run.text;
    if (run.bold && run.italics) {
      text = `***${text}***`;
    } else if (run.bold) {
      text = `**${text}**`;
    } else if (run.italics) {
      text = `*${text}*`;
    }
    result += text;
  }

  return result;
}
