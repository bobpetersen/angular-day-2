
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: { type: String, required: true },
    deliciousness_rating: {type: String, required: true},
    is_hot: {type: String, required: true}
});

module.exports = mongoose.model('food', foodSchema);