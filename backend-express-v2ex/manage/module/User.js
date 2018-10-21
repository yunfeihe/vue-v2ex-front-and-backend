const orm = require('../orm');
const Sequelize = require('sequelize');

const User = orm.define('user', {
    username: {
        type: Sequelize.STRING,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
    },
    head_url: {
        type:Sequelize.STRING,
        defaultValue: `https://images.nowcoder.com/head/${Math.round(Math.random() * 999 )}m.png`,
    }
});
module.exports = User;






