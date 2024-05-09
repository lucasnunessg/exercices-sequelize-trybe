'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      
    await queryInterface.createTable('books', {
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pageQuantify: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'page_quantify'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('books')

  }
};
