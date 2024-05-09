const { underscoredIf } = require("sequelize/types/lib/utils")

const BooksModel = (sequelize, DataTypes) => {
    const Books = sequelize.define('Book', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        pageQuantify: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        underscored: true,
        tableName: 'books'
    });

    return Books;

}


module.exports = BooksModel;