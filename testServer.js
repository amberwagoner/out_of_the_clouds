const http = require("http");

const host = '127.0.0.1';
const port = 8000;

const phrases = [
    "Believe you can and you're halfway there",
    "You are worthy of love and respect",
    "Every day is a new beginning",
    "You have the power to create change",
    "Focus on the good",
    "You are capable of amazing things",
    "Choose joy every day",
    "You are enough just as you are",
    "Your best is yet to come",
    "Dream big and chase your passion"
];

const requestListener = function (req, res) {
   res.writeHead(200, { "Content-Type": "text/plain" });
   const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
   res.end(randomPhrase);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://127.0.0.1:8000`);
});