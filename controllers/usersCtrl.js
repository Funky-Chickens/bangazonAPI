 'use strict'
const{getUsers, getOneUser, postUserObj, putUserObj}= require('../models/User'); //and whatever other methods exported

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

//MAKE SURE to set POSTMAN body to JSON not text.
module.exports.postUser = (req, res, next) => {
    postUserObj(req.body)
    .then((data) => {
        res.status(200);
    })
    .catch((err)=>{
        next(err);
    })
}


module.exports.putUser = (req, res, next) => {
    putUserObj(req.params.id, req.body)
    .then((data) => {
        res.status(200);
    })
    .catch((err)=>{
        next(err);
    })
}

//do module.exports for other methods here:  PUT  if necessary

