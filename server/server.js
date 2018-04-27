const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const foodsRouter = require('./routes/foods.router');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('server/public'));
app.use('/foods', foodsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port', ${PORT}`);
});
