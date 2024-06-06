const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (request, response) {
  console.log(__dirname);
  console.log(__filename);
  response.sendFile(__dirname + '/index.html');
});

app.get('/index', function (request, response) {
  response.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', function (request, response) {
  response.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact-me', function (request, response) {
  response.sendFile(path.join(__dirname, '/contact-me.html'));
});

app.get(/./, function (request, response) {
  response.sendFile(path.join(__dirname, '/404.html'));
});
app.listen(8080);
