const PORT = 8000;
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  try {
    let today = new Date();
    let formattedDate = `${today.toLocaleDateString()} ${today.toLocaleTimeString()}`;
    let fileName = `TimeStamp/${today.getTime()}.txt`;
    fs.writeFileSync(fileName, formattedDate, "utf8");
    let data = fs.readFileSync(fileName, "utf8");
    res.writeHead(200, {
      "content-type": "text/html"
    });
    res.end(`<h1>📆 Current Day and Time 📆</h1><p>${data}</p>`);
    } catch (error) {
    console.log(error);
    res.writeHead(500, {
      "content-type": "text/html"
    });
    res.end("<h1>Internal Server Error</h1>");
  }
});

server.listen(PORT, () => console.log(`app listening to ${PORT}`));
