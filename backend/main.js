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

let Address 
try {
    Address  = mongoose.model('address')
} catch (error) {
    Address  = mongoose.model('address',addressSchema);
}


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


const getAddress = (add) => {
    return new Promise ((resolve,reject) => {
        Address.find({address : add}, (err, data) => {
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

const getPayment = (banks) => {
    return new Promise ((resolve,reject) => {
        Payment.find({bank : banks}, (err, data) => {
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

expressApp.get('/payment/getbank/:bank',(req,res) =>{
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




expressApp.put('/products/put/:id',(req,res) =>{
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

expressApp.delete('/products/delete/:id',(req,res) =>{
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

expressApp.get('/products/getid/:id',(req,res) =>{
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

expressApp.get('/address/getadd/:address',(req,res) =>{
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

expressApp.post('/address/add',(req,res) =>{
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

expressApp.post('/status/add',(req,res) =>{
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

