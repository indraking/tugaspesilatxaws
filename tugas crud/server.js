const express = require("express");
const cors = require("cors");

const app = express();
var corsOption = {
    origin : "http://localhost:8000"
};
app.use(cors(corsOption));
// parse request of content-type aplication/json
app.use(express.json());
// parse request of content-type = application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended:true
}));
const db = require('./app/models');
db.sequelizeConnection.sync()
    .then(()=> {
        console.log("Synced db.");
    }) .catch((err) =>{
        console.log("failed to sync db : "+err.message);
    });

    // Import controller
    const dataController = require('./app/controllers/dataController.js');
    // create data
    app.post("/",(req,res) => {
        console.log('>> create data api');
        dataController.create(req,res);
    });
    //  find all data router
    app.get("/", (req,res)=>{
        dataController.findAll(req, res)
    });
    app.get("/:id", (req,res)=>{
        dataController.findOne(req,res)
    });
    // delete data with an id route
    app.delete("/:id", (req,res)=>{
        Controller.delete(req,res)
    })
    // Set port listen for request
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, ()=>  {
        console.log(`Server is running on port ${PORT}`);
    }); 
