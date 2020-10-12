export function parseCodeToMarkdown(blocks) {
  return `\`\`\`\n${blocks.code}\n\`\`\`\n`;
}
