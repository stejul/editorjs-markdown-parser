import * as fs from 'fs';
import * as path from 'path';

export default class HeaderTypeParser {
  // TODO: Implement Parser
  parseToMarkdown(blocks, dir, filename)
  {
    const saveFile = path.join(dir, filename);
    switch(blocks.type)
    {
      case 2:
        fs.appendFile(saveFile, "Testcontent", (err) => {
        if (err) {
          console.log(err);
        }
          console.log('written file');
        });
      default:
        console.log("default");
    }
  }
}

