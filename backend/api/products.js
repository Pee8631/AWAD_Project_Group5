var exppressFunction = require('express');
const router = exppressFunction.Router();
const authorization = require('../config/authorize')
const mongoose = require('mongoose');



var Schema = require("mongoose").Schema;
const userSchema = Schema({
    type: String,
    id: String,
    name: String,
    detail: String,
    quantity: Number,
    price: Number,
    file: String,
    img: String
   
}, {
    collection: 'products'
});


let Product 
try {
    Product = mongoose.model('products')
} catch (error) {
    Product = mongoose.model('products', userSchema);
}

const addProduct = (productData) => {
    return new Promise ((resolve, reject) => {
        var new_product = new Product(
            productData
        );
        new_product.save((err, data) => {
            if(err){
                reject(new Error('Cannot insert product to DB!'));
            }else{
                resolve({message: 'Product added successfully'});
            }
        });
    });
}

const updateProduct = async (id,data) => {
    return new Promise((resolve, reject) => {
      if (id == undefined) {
        reject(new Error("Cannot update ProductID"));
      }
      Product.updateOne({ id: id }, { $set: data }, (err, data) => {
        if (err) {
          reject(new Error("Cannot update Product"));
        } else {
          resolve({ message: "Product update successfully." });
        }
      });
    });
  };



const getProduct = () => {
    return new Promise ((resolve,reject) => {
        Product.find({}, (err, data) => {
            if(err){
                reject(new Error('Cannot get product!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannot get product!'));
                }
                
            }
        })
    });
}


const getProductID = (id) => {
    return new Promise ((resolve,reject) => {
        Product.find({id : id}, (err, data) => {
            if(err){
                reject(new Error('Cannot get product!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannot get product!'));
                }
                
            }
        })
    });
}

const deleteProduct = (pid) => {
    return new Promise ((resolve,reject) => {
            Product.deleteOne({id: pid}, (err, data) =>{
            if(err){
                reject(new Error('delete product!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannot delete product!'));
                }
                
            }

        })
    })
}


router.route('/put/:id').put((req,res) =>{
    const id = req.params.id
    //const name = req.params.name
    console.log('put');
  
    updateProduct(id, req.body)
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});


router.route('/delete/:id').delete((req,res) =>{
    const pid = req.params.id
    console.log('delete');
    deleteProduct(pid)
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

router.route('/getid/:id').get((req,res) =>{
    const id = req.params.id
    console.log('get');
    getProductID(id)
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});



router.route('/get').get((req,res) =>{
    console.log('get');
    getProduct(req.body)
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
    addProduct(req.body)
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});




module.exports = router