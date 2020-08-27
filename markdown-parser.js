class MarkdownParser
{
  constructor({ data, api }) {
    this.data = data;
    this.api = api;
    this.export = document.querySelector('[data-tool="markdownParser"]')
    this.getContent();
  }

  static get toolbox() {
    return {
      title: 'Markdown Parser',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 24 24" fill="none" stroke="#707684" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>'
    };
  }

  render()
  {
    return document.createElement('div');
  }

  getContent()
  {
    //TODO: find out how all the modules can be extracted
    this.api.listeners.on(this.export, "click", () => {
      console.log("Paragraph");
      console.log(this.api.blocks.getBlockByIndex(9));
      console.log("image");
      console.log(this.api.blocks.getBlockByIndex(13));
  }, false);
}

  save()
  {
    return {
      message: 'Parsing Markdown'
    }
  }
}
