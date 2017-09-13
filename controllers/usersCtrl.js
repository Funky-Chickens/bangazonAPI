 'use strict'
const{getUsers, getOneUser, postUserObj}= require('../models/User'); //and whatever other methods exported

module.exports.getAll=(req, res, next)=>{
    getUsers()//from models folder
    .then((users)=>{
        res.status(200).json(users);
    })
    .catch((err)=>{
        next(err);
    })
};

module.exports.getOneUserById =(req, res, next)=>{
    getOneUser(req.params.id)//method from User.js
    .then((user)=>{
        res.status(200).json(user);
    })
    .catch((err)=>{
        next(err);
    })
}

//MAKE SURE the dev sets POSTMAN to JSON not text.
module.exports.postUser = (req, res, next) => {
    console.log(req.body);
    postUserObj(req.body)
    .then((data) => {
        res.status(200);
    })
    .catch((err)=>{
        next(err);
    })
}

//do module.exports for other methods here: POST PUT PATCH UPDATE DELETE if necessary

