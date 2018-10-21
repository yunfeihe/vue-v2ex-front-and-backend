const orm = require('../orm');
const Sequelize = require('sequelize');

const Post = orm.define('post', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    node: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
module.exports = Post;


