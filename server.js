// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8085;

app.use(cors());
app.use(bodyParser.json());

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  const result = num1 + num2;

  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
