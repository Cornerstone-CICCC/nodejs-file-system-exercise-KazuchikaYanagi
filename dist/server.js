"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Check the README.md file for instructions to the exercise
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dir = "dist/images";
const server = http_1.default.createServer((req, res) => {
    if (req.url === "/view-image") {
        const fileName = "veryhappydog.jpg";
        const filePath = path_1.default.join(dir, fileName);
        fs_1.default.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { "content-type": "text/html" });
                res.end("<h1>Image not found :(</h1>");
                return;
            }
            res.writeHead(200, { "content-type": "image/jpeg" });
            res.end(data);
        });
        return;
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
