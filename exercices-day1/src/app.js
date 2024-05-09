const express = require('express');
const { bookController } = require('./controllers/books.controller');

const app = express()

app.use(express.json());
app.get('/books', bookController.getAll);
app.get('/books/:id', bookController.getById);
app.delete('/books/:id', bookController.deleteBook);
app.post('/books', bookController.addBook);
app.put('/books/:id', bookController.updateBook);