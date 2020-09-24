export function parseCheckboxToMarkdown(blocks) {
    let items = {};

    items = blocks.items.map((item) => {
        if(item.checked === true) {
            return `- [x] ${item.text}`;
        } else {
            return `- [ ] ${item.text}`;
        }
        return null;
    });

    return items.join("\n");
}