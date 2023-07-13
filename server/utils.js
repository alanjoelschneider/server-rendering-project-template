const path = require('path');
const fs = require('fs');

// Returns an array of all paths to the files in the dir
function getAllFilesFromFolder(parentPath) {
  let files = [];

  for (const item of fs.readdirSync(parentPath, { withFileTypes: true })) {
    const itemPath = path.join(parentPath, item.name);
    if (item.isDirectory()) {
      files = files.concat(getAllFilesFromFolder(itemPath));
    } else {
      files.push(itemPath);
    }
  }

  return files;
}

function parseRoute(url) {
  return url.split('?')[0];
}

module.exports = {
  getAllFilesFromFolder,
  parseRoute,
};
