///// define sequelize- a node.js module that allows me to work easier with database.
///// sequelize- אובייקט שמחזיק את SEQUELIZE

const dbConfig = require('./../config/db.config.js');
const Sequelize = require("sequelize");

///// ספריית צד שלישי שעוזרת לנו לעבוד עם מסד הנתונים, שואבת מידע מקובץ הקונפיגורציה
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

///// אובייקט שמכיל את המפתחות הבאים: sequelize + Sequelize + profiles + products+ debts
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.profiles = require('./profiles.js')(sequelize, Sequelize);////יוצר קשר עם דף profiles
db.products = require('./products.js')(sequelize, Sequelize);////יוצר קשר עם דף products
db.debts = require('./debts.js')(sequelize, Sequelize);////יוצר קשר עם דף debts

module.exports = db;