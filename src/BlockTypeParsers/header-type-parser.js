export function parseHeaderToMarkdown(blocks) {
  switch (blocks.level) {
    case 1:
      return `# ${blocks.text}\n`;
      break;
    case 2:
      return `## ${blocks.text}\n`;
      break;
    case 3:
      return `### ${blocks.text}\n`;
      break;
    default:
      break;
  }
}
