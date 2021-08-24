"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const port = 4242;
const server = http_1.default.createServer((request, response) => {
    fs_1.default.readFile('./index.html', (err, data) => {
        if (err) {
            throw err;
        }
        response.end(data);
    });
    // response.writeHead(200, {
    //   'Content-Type': 'text/html',
    //   // 'Content-Length': output.length,
    // });
    // // response.end(output);
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
