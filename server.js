const express = require('express');
const path = require('path');
const connection = require('./routes/index.js');

const PORT = 3001;

const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', connection)

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) => 
res.sendFile(path.join(_dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
console.log(`App listeniing at http://localhost:${PORT}`)
);