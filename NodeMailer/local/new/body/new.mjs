import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs'

// Manually define __filename and __dirname
const __filename = fileURLToPath(import.meta.url); // Get the full path of the current file
const __dirname = path.dirname(__filename);

const configFilePath = path.join(__dirname, '..', '..', '..',  './views/jj.txt');


// Derive the directory path from the file path

export const filepath = () => {
  console.log(configFilePath);
  fs.readFile(configFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Config file contents:', data);
  }); // This will now output the directory of the current file
};