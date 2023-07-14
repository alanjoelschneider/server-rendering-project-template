const path = require('path');
const fs = require('fs');

const compilePug = require('./compilePug');
const compileLess = require('./compileLess');

const rootDir = path.dirname(__dirname);

// Create dirs if they not exist
if (!fs.existsSync(path.join(rootDir, 'public'))) fs.mkdirSync(path.join(rootDir, 'public'));
if (!fs.existsSync(path.join(rootDir, 'public', 'css'))) fs.mkdirSync(path.join(rootDir, 'public', 'css'));

compileLess();
compilePug();
