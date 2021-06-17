var exppressFunction = require('express');
const router = exppressFunction.Router();
const authorization = require('../config/authorize')

var Schema = require("mongoose").Schema;
const statusSchema = Schema({
    type: String,
    name: String,
    img: String,
    status: String
   
}, {
    collection: 'status'
});

let Status 
try {
    Status  = mongoose.model('status')
} catch (error) {
    Status  = mongoose.model('status',statusSchema);
}

const addStatus = (statusdata) => {
    return new Promise ((resolve, reject) => {
        var status = new Status(
            statusdata
        );
        status.save((err, data) => {
            if(err){
                reject(new Error('Cannot insert status to DB!'));
            }else{
                resolve({message: 'status added successfully'});
            }
        });
    });
}

router.route('/add').post((req,res) =>{
    console.log('add');
    addStatus(req.body)
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});
module.exports = router