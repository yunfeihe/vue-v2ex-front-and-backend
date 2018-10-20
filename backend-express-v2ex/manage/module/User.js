const orm = require('../orm');
const Sequelize = require('sequelize');

const User = orm.define('user', {
    username: {
        type: Sequelize.STRING,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
    }
});

User.sync({force: true});

module.exports = User;
