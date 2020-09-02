
export function parseToMarkdown(blocks) {
  switch (blocks.level) {
    case 2:
      return `## ${blocks.text}`;
      break;
    default:
      console.log('default');
      break;
  }
}
