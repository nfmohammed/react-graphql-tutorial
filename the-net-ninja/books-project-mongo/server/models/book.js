const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String, 
    genre: String, 
    authorId: String
});

//Create book-data inside Book collection
module.exports = mongoose.model('Book', bookSchema);