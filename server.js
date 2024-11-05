// server.js

const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Imposta la cartella "public" per i file statici (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Quando l'utente visita la root del sito ("/"), serviamo la home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Imposta la porta del server
app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
