// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html
let request = require('request');
var fs = require('fs')
// const http = require('http');
request.get('http://www.example.edu/ ./index.html', () => {
  fs.writeFile('./index.html', "3261 bytes", function (err) {
    if (err) throw err;
    console.log('replaced');
  });
});