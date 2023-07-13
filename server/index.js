const http = require('http');
const path = require('path');
const fs = require('fs');
// const querystring = require("querystring");

const PORT = 8080;

const server = http.createServer();

// TODO: serve static content from public dir
server.on('request', function (req, res) {
  const route = parseRoute(req.url);
  if (['/', '/index.html'].includes(route)) {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end(getIndex());
  } else {
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/plain');
    res.end('404 not found');
  }
});

function getIndex() {
  const file = path.resolve(path.dirname(__dirname), 'public', 'index.html');
  return fs.readFileSync(file).toString();
}

function parseRoute(url) {
  return url.split('?')[0];
}

server.listen(PORT);
