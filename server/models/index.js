///// define sequelize- a node.js module that allows me to work easier with database.

const dbConfig = require('./../config/db.config.js');
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,  {
    host: dbConfig.HOST,
    port: 3306,
    dialect: dbConfig.dialect,
    operatorsAlias: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.profiles = require('./profiles.js')(sequelize, Sequelize);
db.products = require('./products.js')(sequelize, Sequelize);
db.debts = require('./debts.js')(sequelize, Sequelize);

module.exports = db;
