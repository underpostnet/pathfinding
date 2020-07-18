var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

var seoIndex;

fs.readFile((__dirname + '/seo/index.html'), 'utf8', function(err, contents) {
  seoIndex = contents;
});

var compMain;

fs.readFile((__dirname + '/comp/main.html'), 'utf8', function(err, contents) {
  compMain = contents;
});

var compMeta;

fs.readFile((__dirname + '/comp/meta.html'), 'utf8', function(err, contents) {
  compMeta = contents;
});

app.get('/', function(req, res) {

  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('Req "/" -> New Connection -> IP:'+ip);

  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.write('<!DOCTYPE html><html dir="ltr" lang="en"><head>');
  res.write(seoIndex);
  res.write(compMeta);
  res.write('</head><body>');
  res.write(compMain);
  res.write('</body></html>');
  res.end();

});

app.listen(3001, function () {


});
