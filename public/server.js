const http = require('http');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
const port = 8000;

const requestListener = function (req, res) {
  const url = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, 'public', url);
  const contentType = getContentType(filePath);

  fs.readFile(filePath, function(err, data) {
    if (err) {
      res.writeHead(404);
      res.write('File not found!');
    } else {
      res.setHeader('Content-Type', contentType);
      res.writeHead(200);
      res.write(data);
    }
    res.end();
  });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://127.0.0.1:8000`);
});

function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'application/json';
    case '.png':
      return 'image/png';
    case '.jpg':
      return 'image/jpg';
    default:
      return 'application/octet-stream';
  }
}
