const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const cors =require('cors');

const app = express();
const json = express.json;
app.use(cors());
const port = 8000;

app.post('/encode', json(), (req, res) => {
  const encodedMessage = {"encoded" : Vigenere.Decipher(req.body.password).crypt(req.body.message)};
  res.send(encodedMessage);
});

app.post(`/decode`, json(), (req, res) => {
  const decodedMessage = {"decoded": Vigenere.Cipher(req.body.password).crypt(req.body.message)};
  res.send(decodedMessage);
});

app.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});