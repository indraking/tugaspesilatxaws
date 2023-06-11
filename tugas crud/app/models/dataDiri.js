module.exports = (sequelizeConnection, Sequelize) => {
    const DataDiri = sequelizeConnection.define("data diri", {
        id : {
            type : Sequelize.INTEGER,
            primaryKey: true
        },
        nama: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tempatLahir : {
            type: Sequelize.STRING,
            allowNull: false
        },
        tanggalLahir : {
            type : Sequelize.DATEONLY,
        },
        alamat:{
            type: Sequelize.STRING,
        }
    });
    return DataDiri;    
};

