const fs = require('fs');
const express = require('express')
const path = require('path')
const cors = require('cors');
const app = express()

app.use(cors({
  origin: ['http://localhost:3031', 'http://pengujian3.spr.gov.my:3031']
}));


app.use(express.static('/var/www/spr_integrated/public/api'))

app.get('/api/v1/:kodPilihanraya/calondun', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  const kodPilihanraya = req.params.kodPilihanraya;
  // const data = require('/var/www/spr_integrated/public/api/' + kodPilihanraya + '/calondun.json');
  const jsonData = {};
  fs.readFile('/var/www/spr_integrated/public/api/' + kodPilihanraya + '/calondun.json', 'utf8', (err, data) => {
    if (err) {
      // Handle error if the file cannot be read
      console.error(err);
      res.status(500).send('Error reading JSON file');
      return;
    }

    try {
      // Parse the JSON data
      jsonData = JSON.parse(data);

    } catch (error) {
      console.error(error);
      res.status(500).send('Error parsing JSON data');
    }
  });

  res.write('data: ');
  res.write(JSON.stringify(jsonData));
  res.write('\n\n');
  // Handle client disconnect
  req.on('close', () => {
    res.end();
  });
});

app.get('/api/v1/:kodPilihanraya/calonparlimen', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  const kodPilihanraya = req.params.kodPilihanraya;
  const data = require('/var/www/spr_integrated/public/api/' + kodPilihanraya + '/calonparlimen.json');

  res.write('data: ');
  res.write(JSON.stringify(data));
  res.write('\n\n');
  // Handle client disconnect
  req.on('close', () => {
    res.end();
  });
});

app.get('/api/v1/:kodPilihanraya/keputusan', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  const kodPilihanraya = req.params.kodPilihanraya;
  const data = require('/var/www/spr_integrated/public/api/' + kodPilihanraya + '/keputusan.json');

  res.write('data: ');
  res.write(JSON.stringify(data));
  res.write('\n\n');
  // Handle client disconnect
  req.on('close', () => {
    res.end();
  });
});

app.get('/api/v1/negeri', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  const data = require('/var/www/spr_integrated/public/api/negeri.json');

  res.write(JSON.stringify(data));
  res.end();

});

app.get('/api/v1/pilihanraya', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  const data = require('/var/www/spr_integrated/public/api/pilihanraya.json');

  res.write(JSON.stringify(data));
  res.end();

});

app.get('/api/v1/:kodPilihanraya/parlimen', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  const kodPilihanraya = req.params.kodPilihanraya;
  const data = require('/var/www/spr_integrated/public/api/' + kodPilihanraya + '/parlimen.json');

  res.write(JSON.stringify(data));
  res.end();

});

app.get('/api/v1/:kodPilihanraya/dun', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  const kodPilihanraya = req.params.kodPilihanraya;
  const data = require('/var/www/spr_integrated/public/api/' + kodPilihanraya + '/dun.json');

  res.write(JSON.stringify(data));
  res.end();

});

app.get('/api/v1/:kodPilihanraya/statistikumur', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  const kodPilihanraya = req.params.kodPilihanraya;
  const data = require('/var/www/spr_integrated/public/api/' + kodPilihanraya + '/statistikumur.json');

  res.write(JSON.stringify(data));
  res.end();

});

app.get('/api/v1/:kodPilihanraya/statistikjenis', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  const kodPilihanraya = req.params.kodPilihanraya;
  const data = require('/var/www/spr_integrated/public/api/' + kodPilihanraya + '/statistikjenis.json');

  res.write(JSON.stringify(data));
  res.end();

});

app.get('/api/v1/:kodPilihanraya/dppr', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  const kodPilihanraya = req.params.kodPilihanraya;
  const data = require('/var/www/spr_integrated/public/api/' + kodPilihanraya + '/dppr.json');

  res.write(JSON.stringify(data));
  res.end();

});



app.get('/example/:data', (req, res) => {
  // Example JSON response
  const data = req.params.data;
  const example = require('/var/www/spr_integrated/public/api/' + data + '/calondun.json');
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

