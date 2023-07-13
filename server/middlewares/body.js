function body(req, callback) {
  const chunks = [];
  req
    .on('data', function (chunk) {
      chunks.push(chunk);
    })
    .on('end', function () {
      req.body = Buffer.concat(chunks).toString();
      callback();
    });
}
