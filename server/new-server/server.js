const http = require('http');
const path = require("path");
const url = require("url");

let requestCounter = 0
const favicon = path.join(__dirname, 'favicon.ico')
const server = http.createServer((request, response) => {
    const pathname = url.parse(request.url).pathname;

    if (request.method === 'GET' && pathname !== '/favicon.ico') {
         ++requestCounter;
         response.write(`${requestCounter}`);
    }

     response.end()
})
server.listen(3003)
// установка фавикона и счетчик игнорирует запрос к нему