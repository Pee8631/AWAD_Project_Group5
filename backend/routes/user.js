var expressFunction = require('express');
const router = expressFunction.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var Schema = require("mongoose").Schema;
const userSchema = Schema({
    username: String,
    name: String,
    password: String,
    gender: String,
    email: String,
    Tel: String

},  {
    conllection: 'users'
});

let User
try {
    User = mongoose.model('users')
} catch (error) {
    User = mongoose.model('users', userSchema);
}

const makeHash = async(plainText) => {
    const result = await bcrypt.hash(plainText, 10);
    return result;
}

const insertUser = (dataUser) => {
    return new Promise ((resolve, reject) => {
        var new_user = new User({
            username: dataUser.username,
            password: dataUser.password,
            name: dataUser.name,
            gender: dataUser.gender,
            email: dataUser.email,
            Tel: dataUser.Tel

        });
        new_user.save((err, data) => {
            if(err){
                reject(new Error('Cannot insert user to DB!'));
            }else{
                resolve({massage: 'Sign up successfully'});
            }
        });
    });
}




router.route('/signup')
    .post((req, res) => {
        makeHash(req.body.password)
        .then(hashText => {
            const playload = {
                username: req.body.username,
                password: hashText, 
                name: req.body.name,
                gender: req.body.gender,
                email: req.body.email,
                Tel: req.body.Tel

            }
            console.log(playload);
            insertUser(playload)
                .then(result => {
                    console.log(result);
                    res.status(200).json(result);
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {

        })
    });
module.exports = router