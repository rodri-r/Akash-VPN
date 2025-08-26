const http = require('http');

// Test the /status endpoint
const options = {
  hostname: 'localhost',
  port: 9000,
  path: '/status',
  method: 'GET'
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
  });
});

req.on('error', (err) => {
  console.error(`Error: ${err.message}`);
});

req.end();

console.log('Testing /status endpoint...');
  