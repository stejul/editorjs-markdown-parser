export function parseListToMarkdown(blocks) {
  let items = {};
  switch(blocks.style) {
    case 'unordered':
      items = blocks.items.map((item) => {
        return(`* ${item}\n`);
      });
      
      return items;
      break;
    case 'ordered':
      items = blocks.items.map((item, index) => {
        return(`${index + 1} ${item}\n`);
      });

      return items;
      break;
    default:
      break;
  }
}
