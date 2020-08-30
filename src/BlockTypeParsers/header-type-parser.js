import { fs } from 'fs';
import { path } from 'path';

export function parseToMarkdown(blocks, dir, filename) {
  const saveFile = path.join(dir, filename);
  switch (blocks.type) {
    case 2:
      fs.appendFile(saveFile, 'Testcontent', (err) => {
      if (err) {
        console.log(err);
      }
      console.log('written file');
      });
    default:
      console.log('default');
  }
}
