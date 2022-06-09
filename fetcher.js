//downloads resource at url to local path on my machine
//prints out something like:
//> node fetcher.js http://www.example.edu/ ./index.html
//Downloaded and saved 3261 bytes to./ index.html;

//two asynchronous operations:
//1. make http request and wait for response
//after request is complete, write received data in a file in local filesystem

//use nested callbacks to control the order of async operations

const fs = require('fs');
const request = require('request');
const address = process.argv[2];
const fileName = process.argv[3];

request(address, (error, response, body) => {
  // console.log('error', error);
  // console.log('statusCode', response && response.statusCode);
  // console.log('body', body);

  fs.writeFile(fileName, body.toString(), err => {
    if (err) {
      console.error(err);
    }

    const { size } = fs.statSync(fileName);
    console.log('Downloaded and saved ', size, 'to ', fileName);
    
  });

});