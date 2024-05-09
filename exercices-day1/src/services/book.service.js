const { Books } = require('../models/books.model');

const getAll = async () => {
    const Books = await Books.findAll();

    return Books
};

const getById = async(id) => {
    const Books = await Books.findByPk(id);

    return Books;
};

const addBook = async(title, author, pageQuantify, createdAt, updatedAt) => {
    const newBook = await Books.create({title, author,
    pageQuantify, createdAt, updatedAt});

    return newBook
};

const updateBook = async (id, title,author, pageQuantify, createdAt, updatedAt) => {
    const [updateBook] = await Books.update(
        {title, author, pageQuantify, createdAt, updatedAt},
        {where: { id }},
    )

    return updateBook;
};

const deleteBook = async(id) => {
    const Book = await Books.destroy({
        where: { id }
    })

    return Book
};


module.exports = {
    getAll,
    getById,
    addBook,
    updateBook,
    deleteBook,
}
