const path = require('path');
const fs = require('fs');
const pug = require('pug');

const filename = 'index.pug';
const input = 'src';
const output = 'public';

const entry = path.resolve(path.dirname(__dirname), path.join(input, filename));
const outputDir = path.resolve(path.dirname(__dirname), output);

module.exports = function () {
  const compiled = pug.renderFile(entry, {
    title: 'Hello server rendering',
    cache: false,
  });

  const newFilename = path.join(outputDir, filename.replace('.pug', '.html'));
  fs.writeFileSync(newFilename, compiled);
};
