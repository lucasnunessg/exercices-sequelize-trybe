const { BooksModel } = require('../models/books.model');

const getAll = async () => {
    const Books = await BooksModel.findAll();

    return Books
};

const getById = async(id) => {
    const Books = await BooksModel.findByPk(id);

    return Books;
};

const addBook = async(title, author, pageQuantify, createdAt, updatedAt) => {
    const newBook = await BooksModel.create({title, author,
    pageQuantify, createdAt, updatedAt});

    return newBook
};


module.exports = {
    getAll,
    getById,
    addBook,
}
