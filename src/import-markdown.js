import * as remark from 'remark';
import { parseMarkdownToHeader } from './BlockTypeParsers/header-type-parser';
import { parseMarkdownToParagraph } from './BlockTypeParsers/paragraph-type-parser';
import { parseMarkdownToList } from './BlockTypeParsers/list-type-parser';
import { parseMarkdownToDelimiter } from './BlockTypeParsers/delimiter-type-parser';

export const editorData = [];

export default class ImportMarkdown {
  constructor({ data, api }) {
    this.data = data;
    this.api = api;
  }

  static get toolbox() {
    return {
      title: 'Import Markdown',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(112, 118, 132)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-fileUpload"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>',
    };
  }

  render() {
    const doc = document.createElement('input');
    doc.setAttribute('id', 'file-upload');
    doc.setAttribute('type', 'file');
    doc.setAttribute('style', 'display: none');
    doc.setAttribute('name', 'files[]');
    doc.setAttribute('onload', this.parseMarkdown());

    return doc;
  }

  async parseMarkdown() {

    const a = {};
    const data = await this.api.saver.save();
    a.content = data.blocks;

    //let b = [];
    console.log('EditorJs content');
    console.log(a.content);
    console.log('--------------------');

    const fileUpload = document.getElementById('file-upload');

    fileUpload.onchange = (e) => {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');

      reader.onload = (readerEvent) => {
        const content = readerEvent.target.result;
        console.log(remark().parse(content));
        // TODO: implement switch case block for parsing
        // markdown to json (editorjs)
        const parsedMarkdown = remark().parse(content);
        
        parsedMarkdown.children.forEach((item, index) => {
          //console.log(item.children.forEach((item) => console.log(item)));
          switch (item.type) {
            case 'heading':
              return editorData.push(parseMarkdownToHeader(item));
            case 'paragraph':
              return editorData.push(parseMarkdownToParagraph(item));
            case 'list':
              return editorData.push(parseMarkdownToList(item));
            case 'thematicBreak':
              return editorData.push(parseMarkdownToDelimiter());
            default:
              break;
          }
        });
        // filter through array and remove empty objects
        console.log(editorData.filter((value) => Object.keys(value).length !== 0));

        // TODO rerender editor with new parsed Data
        // this.api.blocks.clear();
        // this.api.blocks.render({
        //   time: 1550476186479,
        //   blocks: [editorData],
        //   version: '2.18.0',
        // });

        return remark().parse(content);
      };
    };

    fileUpload.click();
  }

  save() {
    return {
      message: 'Uploading Markdown',
    };
  }
}
