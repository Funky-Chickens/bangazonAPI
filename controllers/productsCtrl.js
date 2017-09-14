'use strict';

const { getProducts, getOneProduct, deleteOneProduct, putProduct, postprodObj } = require('../models/Product');

module.exports.getProducts = (req, res, next) => {
    getProducts()
    .then( (products) => {
        res.status(200).json(products);
    })
    .catch( (err) => {
        next(err);
    });
};

module.exports.getOneProduct = ({params: {id}}, res, next) => {
    getOneProduct(id)
    .then( (product) => {
        res.status(200).json(product);
    })
    .catch( (err) => next(err));
};

module.exports.deleteOneProduct = ({params: {id}}, res, next) => {
    deleteOneProduct(id)
    .then( () => {
        res.status(200).end();
    })
    .catch( (err) => next(err));
};

module.exports.postprodObj = (req, res, next) => {
    postprodObj(req.body)
    .then( () => {
        res.status(200).end("KABLAM");
    })
    .catch( (err) => next(err));
};



module.exports.putProduct = (req, res, next) => {
    putProduct(req.params.id, req.body)
    .then((data) => {
        res.status(200).end("Updated.");
    })
    .catch((err)=>{
        next(err);
    })
}