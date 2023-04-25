const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Get the requested file path
  let filePath = path.join(__dirname, 'public', req.url);
  if (filePath.endsWith('/')) {
    filePath += 'index.html';
  }

  // Read the file contents
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // If the file does not exist, send a 404 error
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<h1>404 Not Found: ${req.url}</h1>`);
      } else {
        // If there is an error, send a 500 error
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`<h1>500 Internal Server Error</h1><p>${err}</p>`);
      }
    } else {
      // If the file exists, serve it with the appropriate content type
      const contentType = getContentType(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

// Set the server's host and port
const host = '127.0.0.1';
const port = 8000;

// Start the server
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});


// Utility function to get the content type of a file based on its extension
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
    case '.gif':
      return 'image/gif';
    default:
      return 'application/octet-stream';
  }
};
