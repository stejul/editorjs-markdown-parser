import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import SimpleImage from '@editorjs/simple-image';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';
import CodeTool from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import Embed from '@editorjs/embed';
import LinkTool from '@editorjs/link';
import Table from '@editorjs/table';
import Marker from '@editorjs/marker';
import MarkdownParser from './markdown-parser';
import { fileUploadHandler } from './file-handler';

import { dataField } from './data';

const uploadButton = document.getElementById('fileUpload');
const test = uploadButton.addEventListener('change', (e) => fileUploadHandler(e));
console.log(test);

const saveButton = document.getElementById('saveButton');
const newDataField = {};
const editor = new EditorJS({
  autofocus: true,

  /**
       * Wrapper of Editor
       */
  holder: 'editorjs',

  /**
       * Tools list
       */
  tools: {
    /**
    * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
    */
    header: {
      class: Header,
      inlineToolbar: ['link'],
      config: {
        placeholder: 'Header',
      },
      shortcut: 'CMD+SHIFT+H',
    },

    /**
         * Or pass class directly without any configuration
         */
    image: SimpleImage,

    list: {
      class: List,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+L',
    },

    checklist: {
      class: Checklist,
      inlineToolbar: true,
    },

    quote: {
      class: Quote,
      inlineToolbar: true,
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: 'Quote\'s author',
      },
      shortcut: 'CMD+SHIFT+O',
    },

    warning: Warning,

    marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M',
    },

    code: {
      class: CodeTool,
      shortcut: 'CMD+SHIFT+C',
    },

    delimiter: Delimiter,

    inlineCode: {
      class: InlineCode,
      shortcut: 'CMD+SHIFT+C',
    },

    linkTool: LinkTool,

    embed: Embed,

    table: {
      class: Table,
      inlineToolbar: true,
      shortcut: 'CMD+ALT+T',
    },

    image: SimpleImage,

    markdownParser: MarkdownParser,

  },

  /**
       * This Tool will be used as default
       */
  // defaultBlock: 'paragraph',

  /**
       * Initial Editor data
       */
  data: dataField,
  onReady() {
    saveButton.click();
  },
  onChange() {
    console.log(test);
    console.log('something changed');
  },
});
