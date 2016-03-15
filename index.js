var express = require('express');
var app = express();
var useragent = require('express-useragent');

app.use(useragent.express());
app.set('trust proxy', true);
app.get('/', function (req, res) {
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(JSON.stringify({
    ipaddress: req.ip,
    language: req.acceptsLanguages()[0],
    software: req.useragent.source.match(/\(([^\)]+)\)/)[1]
  }));
});

app.listen(process.env.PORT, function () {
  console.log('Listening on port '+process.env.PORT+'!');
});