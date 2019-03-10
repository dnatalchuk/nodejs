const http = require('http');
const fs = require('fs');
const obj = fs.readFileSync('./healthcheck');
const jsobj = JSON.parse(obj);

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = '200';
    res.setHeader = ('Content-Type:','text/json');
    res.write(JSON.stringify(jsobj));
    res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}/`);
});

/*Ussge:  
- first to have both files cloned into same directory. 
- run command: node http_hc.js
- http server will serve content from healthcheck file in json format*/
