import { parseHeaderToMarkdown } from './BlockTypeParsers/header-type-parser';
import { parseParagraphToMarkdown } from './BlockTypeParsers/paragraph-type-parser';
import { parseListToMarkdown } from './BlockTypeParsers/list-type-parser';
import { parseDelimiterToMarkdown } from './BlockTypeParsers/delimiter-type-parser';
import { parseImageToMarkdown } from './BlockTypeParsers/image-type-parser';
import { parseCheckboxToMarkdown } from './BlockTypeParsers/checkbox-type-parser';
import { parseQuoteToMarkdown } from './BlockTypeParsers/quote-type-parser';
import { parseCodeToMarkdown } from './BlockTypeParsers/code-type-parser';
import { fileDownloadHandler, fileUploadHandler } from './file-handler';
import './markdown-parser.css';

export default class MarkdownParser {
  constructor({ data, api }) {
    this.data = data;
    this.api = api;
    // this.export = document.querySelector('[data-tool="markdownParser"]');
  }

  static get toolbox() {
    return {
      title: 'Download Markdown',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(112, 118, 132)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
    };
  }

  render() {
    const doc = document.createElement('div');

    this.getContent();
    return doc;
  }

  async getContent() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    const a = {};
    const data = await this.api.saver.save();

    a.content = data.blocks;

    // TODO: remove html tags in paragraphs (code, highlight, a href)
    const b = a.content.map((item) => {
      switch (item.type) {
        case 'header':
          return parseHeaderToMarkdown(item.data);
        case 'paragraph':
          return parseParagraphToMarkdown(item.data);
        case 'list':
          return parseListToMarkdown(item.data);
        case 'delimiter':
          return parseDelimiterToMarkdown(item);
        case 'image':
          return parseImageToMarkdown(item.data);
        case 'quote':
          return parseQuoteToMarkdown(item.data);
        case 'checkbox':
          return parseCheckboxToMarkdown(item.data);
        case 'code':
          return parseCodeToMarkdown(item.data);
        default:
          break;
      }
    });

    fileDownloadHandler(b.join('\n'), `entry_${dd}-${mm}-${yyyy}.md`);
  }

  save() {
    return {
      message: 'Downloading Markdown',
    };
  }
}
