const express = require('express');
const app = express();
const port = 5050;
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Dashboard API');
});

app.get('/pilihanraya', (req, res) => {
  res.sendFile(__dirname + '/pilihanraya.json');
});

app.get('/negeri', (req, res) => {
  res.sendFile(__dirname + '/negeri.json');
});


//////////////// PRU KE 15
app.get('/2022-02/dun', (req, res) => {
  res.sendFile(__dirname + '/2022-02/dun.json');
});

app.get('/2022-02/calonparlimen', (req, res) => {
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

app.get('/2022-02/calondun', (req, res) => {
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

app.get('/2022-02/keputusan', (req, res) => {
  res.sendFile(__dirname + '/2022-02/keputusan.json');
});

app.get('/2022-02/dppr', (req, res) => {
  res.sendFile(__dirname + '/2022-02/DPPR.json');
});

app.get('/2022-02/parlimen', (req, res) => {
  res.sendFile(__dirname + '/parlimen.json');
});

app.get('/2022-02/statistikumur', (req, res) => {
  res.sendFile(__dirname + '/2022-02/statistikumur.json');
});

app.get('/2022-02/statistikjenis', (req, res) => {
  res.sendFile(__dirname + '/2022-02/statistikjenis.json');
});

//PRU DUN JOHOR KE-15------------------------------------
app.get('/2022-01/calondun', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });


  const data = require('./2022-01/calon_dun.json');
  res.write('data: ');
  res.write(JSON.stringify(data));
  res.write('\n\n');

  // Handle client disconnect
  req.on('close', () => {
    res.end();
  });
});

app.get('/2022-01/statistikumur', (req, res) => {
  res.sendFile(__dirname + '/2022-01/statistikumur.json');
});

app.get('/2022-01/statistikjenis', (req, res) => {
  res.sendFile(__dirname + '/2022-01/statistikjenis.json');
});

app.get('/2022-01/keputusan', (req, res) => {
  res.sendFile(__dirname + '/2022-01/keputusan.json');
});

app.get('/2022-01/dppr', (req, res) => {
  res.sendFile(__dirname + '/2022-01/DPPR.json');
});

app.get('/2022-01/statistik', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  const data = require('./2022-01/statistik.json');
  res.write('data: ');
  res.write(JSON.stringify(data));
  res.write('\n\n');

  // Handle client disconnect
  req.on('close', () => {
    res.end();
  });
});

//PRK TIOMAN-----------------------------------------

app.get('/2022-05/calondun', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });


  const data = require('./2022-05/calon_dun.json');
  res.write('data: ');
  res.write(JSON.stringify(data));
  res.write('\n\n');

  // Handle client disconnect
  req.on('close', () => {
    res.end();
  });
});

app.get('/2022-05/keputusan', (req, res) => {
  res.sendFile(__dirname + '/2022-05/keputusan.json');
});

app.get('/2022-05/dppr', (req, res) => {
  res.sendFile(__dirname + '/2022-05/DPPR.json');
});

app.get('/2022-05/parlimen', (req, res) => {
  res.sendFile(__dirname + '/parlimen.json');
});

app.get('/2022-05/statistikumur', (req, res) => {
  res.sendFile(__dirname + '/2022-05/statistikumur.json');
});

app.get('/2022-05/statistikjenis', (req, res) => {
  res.sendFile(__dirname + '/2022-05/statistikjenis.json');
});

//PRK padang serai-----------------------------------------

app.get('/2022-04/calonparlimen', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });


  const data = require('./2022-04/calon_parlimen.json');
  res.write('data: ');
  res.write(JSON.stringify(data));
  res.write('\n\n');

  // Handle client disconnect
  req.on('close', () => {
    res.end();
  });
});

app.get('/2022-04/keputusan', (req, res) => {
  res.sendFile(__dirname + '/2022-04/keputusan.json');
});

app.get('/2022-04/dppr', (req, res) => {
  res.sendFile(__dirname + '/2022-04/DPPR.json');
});

app.get('/2022-04/parlimen', (req, res) => {
  res.sendFile(__dirname + '/parlimen.json');
});

app.get('/2022-04/statistikumur', (req, res) => {
  res.sendFile(__dirname + '/2022-05/statistikumur.json');
});

app.get('/2022-04/statistikjenis', (req, res) => {
  res.sendFile(__dirname + '/2022-05/statistikjenis.json');
});

// TEST-----------------------------------------------

app.get('/2023-20/calondun', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });


  const data = require('./2023-20/calon_dun.json');
  res.write('data: ');
  res.write(JSON.stringify(data));
  res.write('\n\n');

  // Handle client disconnect
  req.on('close', () => {
    res.end();
  });
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

//pru dun selangor

app.get('/2023-38/calondun', (req, res) => {
  // Set headers for SSE
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });


  const data = require('./2023-38/calon_dun.json');
  res.write('data: ');
  res.write(JSON.stringify(data));
  res.write('\n\n');

  // Handle client disconnect
  req.on('close', () => {
    res.end();
  });
});

app.get('/2023-38/dun', (req, res) => {
  res.sendFile(__dirname + '/2023-38/dun.json');
});

app.get('/2023-38/keputusan', (req, res) => {
  res.sendFile(__dirname + '/2023-38/keputusan.json');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});