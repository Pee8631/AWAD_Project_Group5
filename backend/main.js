const expressFunction = require('express');
const mongoose = require('mongoose');
var expressApp = expressFunction();

const url = 'mongodb://localhost:27017/project';
const config = {
    autoIndex: true,
    userNewUrlParser: true,
    userUnifiedTopology: true 
};

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

var Schema = require("mongoose").Schema;
const paymentSchema = Schema({
    bank: String,
    accountID: String,
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


let Product 
try {
    Product = mongoose.model('products')
} catch (error) {
    Product = mongoose.model('products', userSchema);
}



expressApp.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.setHeader('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
    return next()
});
expressApp.use(expressFunction.json());

expressApp.use((req, res, next) => {
    mongoose.connect(url, config)
    .then(() => {
        console.log('Connected to MongoDB...');
        next();
    })
    .catch(err => {
        console.log('Cannot connect to MongoDB');
        res.status(501).send('Cannot connect to MongoDB')
    });
});


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

/*const deleteProduct = () => {
    return new Promise ((resolve,reject) => {
        Product.delete({}, (err, data) =>{

        })
    })
}*/

expressApp.post('/products/add',(req,res) =>{
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

expressApp.post('/payment/add',(req,res) =>{
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



expressApp.get('/products/get',(req,res) =>{
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

expressApp.use('/user', require('./routes/user'))
expressApp.use('/login', require('./routes/signin'))
expressApp.use('/api', require('./api/products'))

expressApp.listen(3000, function(){
    console.log('Listening on port 3000')
});

