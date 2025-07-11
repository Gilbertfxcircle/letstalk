const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Delta Plax API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});