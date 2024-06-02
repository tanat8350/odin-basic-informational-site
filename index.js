// import http from 'http';
// import url from 'url';
// import fs from 'fs';
const http = require('http');
const url = require('url');
const fs = require('fs');

http
  .createServer(function (request, response) {
    const query = url.parse(request.url, true);
    const filename =
      query.pathname === '/' ? 'index.html' : '.' + query.pathname + '.html';
    fs.readFile(filename, function (err, data) {
      if (err) {
        fs.readFile('./404.html', (_, data) => {
          response.writeHead(404, {
            'Content-Type': 'text/html',
          });
          response.write(data);
          return response.end();
        });
        return;
      }
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(data);
      return response.end();
    });
  })
  .listen(8080);
