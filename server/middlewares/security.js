const types = {
  txt: 'text/plain',
  xml: 'application/xml',
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  mjs: 'text/javascript',
  json: 'application/json',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  png: 'image/png',
  woff2: 'font/woff2',
};

function MIME(req, res) {
  const route = req.url.split('?')[0];
  const ext = route.split('.')[1];

  const type = types[ext];

  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (type) res.setHeader('Content-type', type);
  else res.setHeader('Content-type', 'text/plain');
}

module.exports = {
  MIME,
};
