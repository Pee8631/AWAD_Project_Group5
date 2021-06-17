var exppressFunction = require('express');
const router = exppressFunction.Router();
const authorization = require('../config/authorize')
const mongoose = require('mongoose');

var Schema = require("mongoose").Schema;
const paymentSchema = Schema({
    bank: String,
    accountID: Number,
    accountName: String
   
}, {
    collection: 'payment'
});



let Payment 
try {
    Payment  = mongoose.model('payment')
} catch (error) {
    Payment  = mongoose.model('payment',paymentSchema);
}


const addPayment = (paymentdata) => {
    return new Promise ((resolve, reject) => {
        var payments = new Payment(
            paymentdata
        );
        payments.save((err, data) => {
            if(err){
                reject(new Error('Cannot insert payment to DB!'));
            }else{
                resolve({message: 'payment added successfully'});
            }
        });
    });
}





const deleteBank = (accountID) => {
    return new Promise ((resolve,reject) => {
            Payment.deleteOne({accountID: accountID}, (err, data) =>{
            if(err){
                reject(new Error('delete bank!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannot bank product!'));
                }
                
            }

        })
    })
}


const getPayment = () => {
    return new Promise ((resolve,reject) => {
        Payment.find({}, (err, data) => {
            if(err){
                reject(new Error('Cannot get payment!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannot get payment!'));
                }
                
            }
        })
    });
}




router.route('/delete/:accountID').delete((req,res) =>{
    const accountID = req.params.accountID
    console.log('delete');
    deleteBank(accountID)
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

router.route('/get/').get((req,res) =>{
    const banks = req.params.bank
    console.log('get');
    getPayment(banks)
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
    addPayment(req.body)
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router