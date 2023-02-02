const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server iniciado na porta 3000');
});

app.get('/', (req, res) => {
  res.send('Bem vindo ao meu site, me chamo:');
});

app.get('/nome', (req, res) => {
  res.send('FELIPEssssssssssssssssssss');
});
