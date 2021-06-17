const expressFunction = require('express');
const mongoose = require('mongoose');
var expressApp = expressFunction();

const url = 'mongodb://localhost:27017/project';
const config = {
    autoIndex: true,
    userNewUrlParser: true,
    userUnifiedTopology: true 
};



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


expressApp.use('/user', require('./routes/user'))
expressApp.use('/login', require('./routes/signin'))
expressApp.use('/api/products', require('./api/products'))
expressApp.use('/api/payment', require('./api/payment'))
expressApp.use('/api/address', require('./api/address'))
expressApp.use('/api/status', require('./api/status'))

expressApp.listen(3000, function(){
    console.log('Listening on port 3000')
});

