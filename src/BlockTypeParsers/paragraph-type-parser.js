export function parseParagraphToMarkdown(blocks) {
  return `${blocks.text}\n`;
}

export function parseMarkdownToParagraph(blocks) {
  let paragraphData = {};

  if (blocks.type === 'paragraph') {
    blocks.children.forEach((item) => {
      if (item.type === 'text') {
        paragraphData = {
          data: {
            text: item.value,
          },
          type: 'paragraph',
        };
      }
    });
  }
  return paragraphData;
}
