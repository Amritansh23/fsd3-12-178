import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/product") {
    const stream = createReadStream("./product.html");
    stream.pipe(res);
  } else if (req.url === "/contact") {
    const stream = createReadStream("./contact.html");
    stream.pipe(res);
  } else {
    res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("prg6 is running...");
});
