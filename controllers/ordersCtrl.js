 'use strict'
const{getOrders, getOneOrder, postOrderObj}= require('../models/Order');

module.exports.getAll=(req, res, next)=>{
    getOrders()//from models folder
    .then((orders)=>{
        res.status(200).json(orders);
    })
    .catch((err)=>{
        next(err);
    })
};

module.exports.getOneOrderById =(req, res, next)=>{
    getOneOrder(req.params.id)//method from User.js
    .then((order)=>{
        res.status(200).json(order);
    })
    .catch((err)=>{
        next(err);
    })
}

//MAKE SURE the dev sets POSTMAN to JSON not text.
module.exports.postOrder = (req, res, next) => {
    postOrderObj(req.body)
    .then((data) => {
        res.status(200);
    })
    .catch((err)=>{
        next(err);
    })
}

//do module.exports for other methods here:  PUT  if necessary

