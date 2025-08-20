const http = require('http');

// Test the POST /connect endpoint
const postData = JSON.stringify({
  host: 'example.com',
  port: 22,
  username: 'testuser',
  password: 'testpass'
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/connect',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(`Response: ${data}`);
    try {
      const jsonResponse = JSON.parse(data);
      console.log('Parsed response:', jsonResponse);
    } catch (e) {
      console.log('Response is not valid JSON');
    }
  });
});

req.on('error', (err) => {
  console.error(`Error: ${err.message}`);
});

req.write(postData);
req.end();

console.log('Testing POST /connect endpoint...'); 