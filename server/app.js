const express = require('express');
const cors = require('cors');
const { Phone } = require('./db/models');

const app = express();

const PORT = process.env.PORT ?? 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => { 
  res.redirect('/phones');
})

app.post('/phones', async (req, res) => { 
  const { number } = req.body;
  const newNumber = await Phone.create({ number });
  res.json(newNumber);
})

app.listen(PORT, () => {
  console.log(`***Server started at ${PORT} PORT***`);
});