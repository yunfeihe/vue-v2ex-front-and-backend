const Sequelize = require('sequelize');

const config = {
    dbName: 'fake-v2ex',
    username: 'root',
    pwd: 'heyunfei',
    more: {
        host: '127.0.0.1',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
}

const sequelize = new Sequelize(config.dbName, config.username, config.pwd, config.more);

sequelize.authenticate()
    .then(() => {
        console.log('db connenct success');
    })
    .catch((err) => {
        console.log('db connent error', err);
    });

module.exports = sequelize;