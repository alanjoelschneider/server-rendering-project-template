const path = require('path');
const fs = require('fs');
const less = require('less');

const filename = 'main.less';
const input = 'src/css';
const output = 'public/css';

const entry = path.resolve(path.dirname(__dirname), path.join(input, filename));
const outputDir = path.resolve(path.dirname(__dirname), output);

// Gets less source code
const source = fs.readFileSync(entry);
const lessOptions = {
  // Need this option to resolve @imports
  filename: entry,
};

function handleLessRender(err, compiled) {
  if (err) throw err;

  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  const newFilename = path.join(outputDir, filename.replace('.less', '.css'));
  fs.writeFileSync(newFilename, compiled.css);

  // Compilation feedback
  console.log('Less files compiled successfully');
  compiled.imports.forEach((imp) => {
    console.log('import:', imp);
  });
  console.log('main:', newFilename);
}

module.exports = function () {
  less.render(source.toString(), lessOptions, handleLessRender);
};
