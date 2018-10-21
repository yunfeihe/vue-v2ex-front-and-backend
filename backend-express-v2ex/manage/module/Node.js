const orm = require('../orm');
const Sequelize = require('sequelize');

const Node = orm.define('node', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
module.exports = Node;

