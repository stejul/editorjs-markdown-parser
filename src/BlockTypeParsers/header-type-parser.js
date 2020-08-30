import * as fs from 'fs';
import * as path from 'path';

export function parseToMarkdown(blocks, dir, filename) {
  const saveFile = path.join(dir, filename);
  switch (blocks.level) {
    case 2:
      fs.writeFile(saveFile, 'Testcontent', (err) => {
      if (err) {
        console.log(err);
      }
      console.log('written file');
      });
      break;
    default:
      console.log('default');
  }
}
