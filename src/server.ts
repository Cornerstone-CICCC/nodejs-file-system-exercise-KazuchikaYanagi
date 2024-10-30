// Check the README.md file for instructions to the exercise
import http from "http";
import fs from "fs";
import path from "path";

const dir = "dist/images";

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url === "/view-image") {
      const fileName = "veryhappydog.jpg";
      const filePath = path.join(dir, fileName);
      fs.readFile(filePath, (err, data) => {
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
  }
);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
