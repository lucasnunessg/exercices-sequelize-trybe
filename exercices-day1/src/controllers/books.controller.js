const { bookService } = require('../services/book.service');

const getAll = async (req, res) => {
    try {
        const { author } = req.query;

        let books;

        if(author){
        books = await bookService.getByAuthor();
        }else{
        books = await bookService.getAll();
        }
        return res.status(200).json(books);
    } catch (e) {
        console.log(e.message);
        return res.status(500).json({ message: 'Não foi possível encontrar os livros!' });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await bookService.getById(id);

        if (!book) 
            return res.status(404).json({ message: 'Não foi possível encontrar o livro selecionado' });

        return res.status(200).json(book);
    } catch (e) {
        console.log(e.message);
        return res.status(500).json({ message: 'Não foi possível encontrar' });
    }
};

const addBook = async(req, res) => {
    try {
        const { title, author, pageQuantify } = req.body;
        const newBook = await bookService.addBook(title, author, pageQuantify);
        return res.status(201).json(newBook);
    } catch (e) {
        console.log(e.message);
        return res.status(500).json({ message: 'Não foi possível adicionar outro livro' });
    }
};

const updateBook = async(req, res) => {
    try {
        const { id } = req.params;
        const { title, author, pageQuantify } = req.body;

        const updatedBook = await bookService.updateBook(id, title, author, pageQuantify);
        if (!updatedBook)
            return res.status(404).json({ message: 'Não foi possível encontrar o livro para atualizar' });

        return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
    } catch (e) {
        console.log(e.message);
        return res.status(500).json({ message: 'Não foi possível atualizar!' });
    }
};

const deleteBook = async(req, res) => {
    try {
        const { id } = req.params;
        await bookService.deleteBook(id);
        return res.status(200).json({ message: 'Livro deletado com sucesso!' });
    } catch (e) {
        console.log(e.message);
        return res.status(500).json({ message: 'Não foi possível deletar!' });
    }
}

module.exports = {
    getAll,
    getById,
    addBook,
    updateBook,
    deleteBook,
}
