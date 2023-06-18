const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('/var/www/spr_integrated/public/api'))

// SSE endpoint
// app.get('/api/v1', (req, res) => {
//   res.setHeader('Content-Type', 'text/event-stream')
//   res.setHeader('Cache-Control', 'no-cache')
//   res.setHeader('Connection', 'keep-alive')

//   // Send SSE messages periodically
//   const intervalId = setInterval(() => {
//     const data = 'This is an SSE message'

//     // Send SSE event
//     res.write(`event: message\n`)
//     res.write(`data: ${data}\n\n`)
//   }, 1000);

//   // Close SSE connection on client disconnect
//   req.on('close', () => {
//     clearInterval(intervalId)
//     res.end()
//   })
// })


app.get('/api/v1/:kodPilihanraya/calondun', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  const kodPilihanraya = req.params.kodPilihanraya;
  const data = require(`/var/www/spr_integrated/public/api/${kodPilihanraya}/calondun.json`);
  console.log(`/var/www/spr_integrated/public/api/${kodPilihanraya}/calondun.json`)
  console.log(data)
  res.write('data: ');
  res.write(JSON.stringify(data));
  res.write('\n\n');
  // Handle client disconnect
  req.on('close', () => {
    res.end();
  });
});

app.get('/example/:data', (req, res) => {
  // Example JSON response
  const data = req.params.data;
  const example = require('/var/www/spr_integrated/public/api/'+data+'/calondun.json');
  const responseBody = {
    message: 'This is an example response.${example}',
    data: {
      foo: 'bar',
      baz: 123,
    },
  };

  res.json(responseBody);
});

// Start the server
const port = 5051
const host = '0.0.0.0' // Specify the server's public IP address or domain name
app.listen(port, host, () => {
  console.log(`Server is running on ${host}:${port}`)
})