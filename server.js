const http = require('http');

const host = '127.0.0.1';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.writeHead(200, { "Content-Type": "text/plain" });
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    res.end(randomPhrase);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://127.0.0.1:8000`);
});

