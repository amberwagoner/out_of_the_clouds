const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = 8000;

const requestListener = function (req, res) {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('index.html', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.write('File not found!');
            } else {
                res.writeHead(200);
                res.write(data);
            }
            res.end();
        });
    } else if (req.url === '/style.css') {
        res.setHeader('Content-Type', 'text/css');
        fs.readFile('style.css', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.write('File not found!');
            } else {
                res.writeHead(200);
                res.write(data);
            }
            res.end();
        });
    } else {
        res.writeHead(404);
        res.write('File not found!');
        res.end();
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://127.0.0.1:8000`);
});

