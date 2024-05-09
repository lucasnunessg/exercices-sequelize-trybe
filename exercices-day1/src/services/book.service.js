const { Books } = require('../models/books.model');

const getAll = async () => {
    const Books = await Books.findAll();

    return Books
};

const getById = async(id) => {
    const Books = await Books.findByPk(id);

    return Books;
};

const getByAuthor = async(author) => {
    const books = await Books.findAll({ 
        where: { author }
     })
    return books;
}

const addBook = async(title, author, pageQuantify, ) => {
    const newBook = await Books.create({title, author,
    pageQuantify });

    return newBook
};

const updateBook = async (id, title,author, pageQuantify) => {
    const [updateBook] = await Books.update(
        {title, author, pageQuantify},
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
    getByAuthor,
    updateBook,
    deleteBook,
}
