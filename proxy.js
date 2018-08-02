const express = require('express');
const request = require('request');
let app = express();
app.use('/', function(req, res) {
    var url = 'https://www.baidu.com/' + req.url;
    req.pipe(request(url)).pipe(res);
});
app.listen(process.env.PORT || 3000);
console.log('listening port3000')