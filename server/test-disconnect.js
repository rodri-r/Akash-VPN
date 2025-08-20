const http = require('http');

const postData = JSON.stringify({
    host: 'example.com',
    port: 22,
    username: 'testuser',
    password: 'testpass'
  });

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/disconnect',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
}

const req = http.request(options, (res) => {
    console.log('Response status:', res.statusCode);
    console.log('Response headers:', res.headers);
    
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    res.on('end', () => {
        try {
            const response = JSON.parse(data);
            console.log('Response body:', response);
        } catch (error) {
            console.log('Raw response:', data);
        }
    });
});

req.on('error', (error) => {
    console.error('Request error:', error.message);
});

req.on('timeout', () => {
    console.error('Request timeout');
    req.destroy();
});

req.setTimeout(10000); // 10 second timeout

req.write(postData);
req.end();