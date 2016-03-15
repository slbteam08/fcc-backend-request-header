var express = require('express');
var app = express();
var useragent = require('express-useragent');

app.use(useragent.express());
app.get('/', function (req, res) {
  res.send(JSON.stringify({
    ipaddress: req.ip,
    language: req.acceptsLanguages()[0],
    softwre: req.useragent.source.match(/\(([^\)]+)\)/)[1]
  }));
});

app.listen(process.env.PORT, function () {
  console.log('Listening on port '+process.env.PORT+'!');
});