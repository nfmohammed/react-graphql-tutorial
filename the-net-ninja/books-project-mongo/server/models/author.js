const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String, 
    age: Number
});

//Create book-data inside Book collection
module.exports = mongoose.model('Author', authorSchema);