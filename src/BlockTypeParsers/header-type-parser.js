export function parseHeaderToMarkdown(blocks) {
  switch (blocks.level) {
    case 1:
      return `# ${blocks.text}\n`;
    case 2:
      return `## ${blocks.text}\n`;
    case 3:
      return `### ${blocks.text}\n`;
    default:
      break;
  }
}

export function parseMarkdownToHeader(blocks) {
  let headerData = {};

  switch (blocks.depth) {
    case 1:
      blocks.children.forEach((item) => {
        headerData = {
          data: {
            level: 1,
            text: item.value,
          },
          type: 'header',
        };
      });

      return headerData;
    case 2:
      blocks.children.forEach((item) => {
        headerData = {
          data: {
            level: 2,
            text: item.value,
          },
          type: 'header',
        };
      });

      return headerData;
    case 3:
      blocks.children.forEach((item) => {
        headerData = {
          data: {
            level: 3,
            text: item.value,
          },
          type: 'header',
        };
      });

      return headerData;
    default:
      break;
  }
}
