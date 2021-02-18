const { Schema, model } = require('mongoose');

let message = 'It is required';

const BookSchema = Schema({
    isbn: {
        type: String,
        required: [true, `isbn ${message}`]
    },
    title: {
        type: String,
        required: [true, `title ${message}`]
    },
    author: {
        type: String,
        required: [true, `author ${message}`]
    },
});

module.exports = model('Book', BookSchema);