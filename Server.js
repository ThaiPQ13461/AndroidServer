var http = require("http");
var dt = require("./uniTest");
var fs = require("fs");
http
  .createServer(function (req, res) {
    // fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
    //   if (err) throw err;
    //   console.log("Saved!");
    // });
    // fs.readFile("index.html", function (err, data) {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    //   res.write(data);
    //   return res.end();
    // });
    // fs.unlink("mynewfile1.txt", function (err) {
    //   if (err) throw err;
    //   console.log("File deleted!");
    // });
    res.writeHead(200, { "Content-Type": "text/plain" });
     res.write("Hello world ");
     res.write("\n Tong: " + dt.sum(5, 5));
     res.end();
  })
  .listen(3000);
