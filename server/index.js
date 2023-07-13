const http = require('http');
const path = require('path');
const fs = require('fs');
const { parseRoute } = require('./utils');

const PORT = 8080;

const server = http.createServer(function (req, res) {
  const route = parseRoute(req.url);

  if (route === '/') {
    try {
      const file = fs.readFileSync(path.join(path.dirname(__dirname), 'public', 'index.html'));
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html');
      res.end(file.toString());
    } catch (e) {
      res.statusCode = 404;
      res.setHeader('Content-type', 'text/plain');
      res.end('404 not found');
    }
  } else {
    serveStatic('public', route, res);
  }
});

function serveStatic(dir, route, res) {
  const dirPath = path.join(path.dirname(__dirname), dir, route);

  try {
    const file = fs.readFileSync(dirPath).toString();
    res.statusCode = 200;
    if (route.endsWith('.css')) res.setHeader('Content-type', 'text/css');
    else if (route.endsWith('.html')) res.setHeader('Content-type', 'text/html');
    else res.setHeader('Content-type', 'text/plain');
    res.end(file);
  } catch (e) {
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/plain');
    res.end('404 not found');
  }
}

server.listen(PORT);
