export function parseQuoteToMarkdown(blocks) {
    return `> ${blocks.text}\n`;
}