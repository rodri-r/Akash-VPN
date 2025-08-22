const http = require('http');

const postData = JSON.stringify({
    host: 'example.com',
    port: 22,
    username: 'testuser',
    password: 'testpass'
  });

const options = {
    hostname: 'localhost',
    port: 9000,
    path: '/disconnect',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
}

const req = http.request(options, (res) => {
    console.log('response: ', res.statusCode);
});

req.write(postData);
req.end();