const http = require('http');
const fs = require('fs');
const path = require('path');

    const server = http.createServer((req, res) => {
        const filePath = path.join(__dirname, 'public', req.url);
        const contentType = getContentType(filePath);
        fs.readFile(filePath, (err, content) => {
          if (err) {
            // Handle error
          } else {
            res.setHeader('Content-Type', contentType);
            res.end(content);
          }
        });
      });
      


    const host = '127.0.0.1';
    const port = 8000;

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
      case '.mjs':
        return 'text/javascript';
      case '.jpg':
        return 'image/jpeg';
      case '.png':
        return 'image/png';
      case '.gif':
        return 'image/gif';
      default:
        return 'application/octet-stream';
    }
  }
  
