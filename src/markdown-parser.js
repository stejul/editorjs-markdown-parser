import { parseHeaderToMarkdown } from './BlockTypeParsers/header-type-parser';
import { parseParagraphToMarkdown } from './BlockTypeParsers/paragraph-type-parser';
import { parseListToMarkdown } from './BlockTypeParsers/list-type-parser';
import { parseDelimiterToMarkdown } from './BlockTypeParsers/delimiter-type-parser';
import { parseImageToMarkdown } from './BlockTypeParsers/image-type-parser';
import { parseCheckboxToMarkdown} from './BlockTypeParsers/checkbox-type-parser';
import { parseQuoteToMarkdown } from './BlockTypeParsers/quote-type-parser';
import { parseCodeToMarkdown } from './BlockTypeParsers/code-type-parser';
import { fileHandler } from './file-handler';

export default class MarkdownParser {
  constructor({ data, api }) {
    this.data = data;
    this.api = api;
    this.export = document.querySelector('[data-tool="markdownParser"]');
    this.getContent();
  }

  static get toolbox() {
    return {
      title: 'Markdown Parser',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 24 24" fill="none" stroke="#707684" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>',
    };
  }

  render() {
    return document.createElement('div');
  }

  async getContent() {
    const a = {};
    const data = await this.api.saver.save();

    a.content = data.blocks;
    console.log(a.content);

    //TODO: remove html tags in paragraphs (code, highlight, a href)
    const b = a.content.map(item => {
        switch(item.type) {
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
    

    fileHandler(b.join('\n'), 'example.md');
    console.log(b);
  }

  save() {
    return {
      message: 'Parsing Markdown',
    };
  }
}
