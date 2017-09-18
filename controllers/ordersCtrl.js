 'use strict'
const { getOrders, getOneOrder, postOrderObj, postProdOrderObj, deleteOneOrder, deleteOneProdOrder, putOrder, getUsersOrders } = require('../models/Order');

module.exports.getAll=(req, res, next)=>{
    getOrders()//from models folder
    .then( (orders) => {
        res.status(200).json(orders);
    })
    .catch( (err) => next(err));
}

module.exports.getOneOrderById =(req, res, next)=>{
    getOneOrder(req.params.id)//method from User.js
    .then( (order) => {
        res.status(200).json(order);
    })
    .catch( (err) => next(err));
}

//MAKE SURE the dev sets POSTMAN to JSON not text.
module.exports.postOrder = (req, res, next) => {
    postOrderObj(req.body)
    .then( (data) => {
        res.status(200).end('order posted sucessfully');
    })
    .catch( (err) => next(err));
}

module.exports.putOrder = (req, res, next) => {
    putOrder(req.params.id, req.body)
    .then( (data) => {
        res.status(200).end();
    })
    .catch( (err) => next(err));
}

module.exports.deleteOneOrder = ({params: {id}}, res, next) => {
    deleteOneOrder(id)
    .then( () => {
        res.status(200).end();
    })
    .catch( (err) => next(err));
}

module.exports.postProdOrder = (req, res, next) => {
    postProdOrderObj(req.body)
    .then( (data) => {
        res.status(200).end('product order posted sucessfully');
    })
    .catch( (err) => next(err));
}

module.exports.deleteOneProdOrder = ({params: {id}}, res, next) => {
    deleteOneProdOrder(id)
    .then( () => {
        res.status(200).end("Deleted if existed.");
    })
    .catch( (err) => next(err));
};

module.exports.getOrdersByUser = ({params: {uid}}, res, next) => {
    getUsersOrders(uid)
    .then( (data) => {
        res.status(200).json(data).end();
    })
    .catch( (err) => next(err));
};

//do module.exports for other methods here:  PUT  if necessary

