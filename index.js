const express = require('express');
const app = express();
const port = 5051;
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/pilihanraya', (req, res) => {
  res.sendFile(__dirname + '/pilihanraya.json');
});

app.get('/parlimen', (req, res) => {
  res.sendFile(__dirname + '/2022-02/parlimen.json');
});

app.get('/dun', (req, res) => {
  res.sendFile(__dirname + '/2022-02/dun.json');
});

app.get('/negeri', (req, res) => {
  res.sendFile(__dirname + '/negeri.json');
});

app.get('/calonparlimen', (req, res) => {
  res.sendFile(__dirname + '/2022-02/calon_parlimen.json');
});

app.get('/calondun', (req, res) => {
  res.sendFile(__dirname + '/2022-02/calon_dun.json');
});

app.get('/keputusan', (req, res) => {
  res.sendFile(__dirname + '/2022-02/keputusan.json');
});

app.get('/statistik', (req, res) => {
  res.sendFile(__dirname + '/2022-02/statistik.json');
});

app.get('/keputusan2', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const data = require('./2022-02/keputusan.json');
  res.write('data: ');
  res.write(JSON.stringify(data));
  res.write('\n\n');

  req.on('close', () => {
    res.end();
  });
});

app.get('/statistik2', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const data = require('./2022-02/statistik.json');
  res.write('data: ');
  res.write(JSON.stringify(data));
  res.write('\n\n');

  req.on('close', () => {
    res.end();
  });
});



app.get('/negeri2', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const data = require('./negeri.json');
  res.write('data: ');
  res.write(JSON.stringify(data));
  res.write('\n\n');

  req.on('close', () => {
    res.end();
  });
});

app.get('/calonparlimen2', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const data = require('./2022-02/calon_parlimen.json');
  res.write('data: ');
  res.write(JSON.stringify(data));
  res.write('\n\n');

  // Handle client disconnect
  req.on('close', () => {
    res.end();
  });
});

app.get('/calondun2', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const data = require('./2022-02/calon_dun.json');
  res.write('data: ');
  res.write(JSON.stringify(data));
  res.write('\n\n');

  // Handle client disconnect
  req.on('close', () => {
    res.end();
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});