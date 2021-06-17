var exppressFunction = require('express');
const router = exppressFunction.Router();
const authorization = require('../config/authorize')
const mongoose = require('mongoose');

var Schema = require("mongoose").Schema;
const addressSchema = Schema({
    address: String,
    subdistrict: String,
    district: String,
    province: String,
    postal: String
   
}, {
    collection: 'address'
});


let Address 
try {
    Address  = mongoose.model('address')
} catch (error) {
    Address  = mongoose.model('address',addressSchema);
}

const addAddress = (address) => {
    return new Promise ((resolve, reject) => {
        var addresss = new Address(
            address
        );
        addresss.save((err, data) => {
            if(err){
                reject(new Error('Cannot insert address to DB!'));
            }else{
                resolve({message: 'address added successfully'});
            }
        });
    });
}


const getAddress = () => {
    return new Promise ((resolve,reject) => {
        Address.find({}, (err, data) => {
            if(err){
                reject(new Error('Cannot get address!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannot get address!'));
                }
                
            }
        })
    });
}

router.route('/get/').get((req,res) =>{
    const add = req.params.address
    console.log('get');
    getAddress(add)
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

router.route('/add').post((req,res) =>{
    console.log('add');
    addAddress(req.body)
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router