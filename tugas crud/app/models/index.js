const Sequelize = require("sequelize");
const sequelizeConnection = new Sequelize(
    'pesilatxaws',
    'root',
    '',
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
);
const dataDiri = require("./dataDiri.js")(sequelizeConnection,Sequelize);
const db = {};
db.Sequelize = Sequelize; // property dependency
db.sequelizeConnection = sequelizeConnection; //property squilize connection
db.dataDiri = dataDiri; // property models
module.exports = db;