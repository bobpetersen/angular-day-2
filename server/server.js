const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const foodsRouter = require('./routes/foods.router');
const bodyParser = require('body-parser');



app.use(bodyParser.json());


app.use(express.static('server/public'));
app.use('/foods', foodsRouter);

const databaseUrl = 'mongodb://localhost:27017/food_shop';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', error => {
    console.log('mongoose connection error', error);
});


app.listen(PORT, () => {
    console.log(`Server is running on port', ${PORT}`);
});























