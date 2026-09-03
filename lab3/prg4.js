import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  console.log("Client URL:", req.url);

  const product = {
    name: "iphone",
    price: 85000,
    qty: 2,
    discount: 10,
  };

  res.end(JSON.stringify(product));
});

server.listen(300, () => console.log("Server is running..."));
