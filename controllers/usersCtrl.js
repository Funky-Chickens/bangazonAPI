 'use strict'
const{ getUsers, getOneUser, postUserObj, putUserObj, getUsersNoOrders } = require('../models/User'); //and whatever other methods exported

module.exports.getAll = (req, res, next) => {
    getUsers()//from models folder
    .then( (users)=>{
        res.status(200).json(users);
    })
    .catch( (err)=>{
        next(err);
    })
};

module.exports.getOneUserById = (req, res, next) => {
    getOneUser(req.params.id)//method from User.js
    .then( (user) => {
        res.status(200).json(user);
    })
    .catch( (err) => {
        next(err);
    })
}

//MAKE SURE to set POSTMAN body to JSON not text.
module.exports.postUser = (req, res, next) => {
    postUserObj(req.body)
    .then( (data) => {
        res.status(200).end("Posted.");
    })
    .catch( (err)=>{
        next(err);
    })
}


module.exports.putUser = (req, res, next) => {
    putUserObj(req.params.id, req.body)
    .then( (data) => {
        res.status(200).end("Updated.");
    })
    .catch( (err)=>{
        next(err);
    })
}

module.exports.getUsersWithNoOrders = (req, res, next) => {
    let queryBoolean = checkForQuery(req.query) ? true : false;
    if(queryBoolean && req.query.hasOwnProperty('active')) {
        getUsersNoOrders(req.query)
        .then( (users) => {
            res.status(200).json(users);
        })
        .catch( (err)=> {
            next(err);
        })
    } else {
        next();
    }
}

let checkForQuery = (query) => {
    let queryBoolean = Object.keys(query).length > 0 ? true : false;
    return queryBoolean;
}
