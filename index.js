const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.get('/dun', (req, res) => {
//   res.sendFile(__dirname + '/2022-02/dun.json');
// });

app.get('/pilihanraya', (req, res) => {
  res.sendFile(__dirname + '/pilihanraya.json');
});

app.get('/calondun', (req, res) => {
  res.sendFile(__dirname + '/2022-02/calon_dun.json');
});

app.get('/calonparlimen', (req, res) => {
  res.sendFile(__dirname + '/2022-02/calon_parlimen.json');
});

app.get('/parlimen', (req, res) => {
  res.sendFile(__dirname + '/2022-02/parlimen.json');
});

app.get('/dun', (req, res) => {
  res.sendFile(__dirname + '/2022-02/dun.json');
});

app.get('/peratusan', (req, res) => {
  res.sendFile(__dirname + '/2022-02/peratusan.json');
});

app.get('/statistik', (req, res) => {
  res.sendFile(__dirname + '/2022-02/statistik.json');
});

app.get('/negeri', (req, res) => {
  res.sendFile(__dirname + '/negeri.json');
});




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});