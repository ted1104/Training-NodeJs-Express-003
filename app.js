console.log("Express tutorial by Teddy Walter");
const http = require("http");
const { readFileSync } = require("fs");

/*
    get all pages content :: we are using synchrome because this bloc
    is not calling when we request a ressource on the server but is calling
    when we initialize the server
*/
const homePage = readFileSync("./ui/index.html");

http
  .createServer((req, res) => {
    // console.log(req.url);

    const { url } = req;
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      //   res.write("<h1>HOME PAGE</h1>");
      res.write(homePage);
      res.end();
    } else if (url === "/about") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>ABOUT PAGE</h1>");
      res.end();
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>Oops ! 404 Not Found</h1>");
      res.end();
    }

    // console.log("User hit the server");
  })
  .listen(5000, () => {
    console.log("Server listening on port 5000");
  });
