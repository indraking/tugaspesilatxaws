const db = require('../models');
const DataDiri = db.dataDiri;
const Op = db.Sequelize.Op;
//  create data diri method
exports.create = (req,res) => {
    console.log('>> controller api');
    //  validate request
    if(!req.body.nama){
        res.status(400).send({
            message:"Content can't be empty!"
        });
        return;
    } 
    console.log('>> Create Data diri');
    const dataDiri = {
        id: req.body.id,
        nama:req.body.nama,
        tempatLahir: req.body.tempatLahir,
        tanggalLahir: req.body.tanggalLahir,
        alamat: req.body.alamat
    };
    DataDiri.create(dataDiri)
    .then(data => {
        console.log('>> insert Data successfully');
        res.send(data);
    })
    .catch(err =>{
        console.log('>> insert Data failed');
        res.status(500).send({
            message:"Error occured while inserting data"
        });
    });


};

// Get all data method
exports.findAll = (req, res) => {
    DataDiri.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error while retrieving DataDiris"
            });
        });
};

// Find a single data with an id
exports.findOne = (req,res)=>{
    DataDiri.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(data=>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "error while finding data"
        });
    });
}

//  delete a data with an id
exports.delete = (req,res) => {
    DataDiri.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(
        res.send({
            message:`Success delete data with id = ${req.params.id}`
        })
    )
    .catch(err => {
        res.status(500).send({
            message : `Couldn't delete data with id = ${req.params.id}`
        });
    });
}