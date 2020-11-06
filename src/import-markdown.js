import { fileUploadHandler } from './file-handler';
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

    // TODO: return import method

    return doc;
  }

  async parseMarkdown() {

    const a = {};
    const data = await this.api.saver.save();
    a.content = data.blocks;

    const fileUpload = document.getElementById('file-upload');

    fileUpload.onchange = (e) => {
      const file = e.target.files[0];
      console.log(file);

      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');

      reader.onload = (readerEvent) => {
        const content = readerEvent.target.result;
        console.log(content);
      };
    };
    fileUpload.click();
    console.log('fileupload log');
    console.log(fileUpload);
  }

  save() {
    return {
      message: 'Uploading Markdown',
    };
  }
}
