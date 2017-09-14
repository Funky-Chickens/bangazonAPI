'use strict';

const { getProducts, getOneProduct, deleteOneProduct } = require('../models/Product');

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
    console.log("id1", id);
    deleteOneProduct(id)
    .then( () => {
        res.status(200).end();
    })
    .catch( (err) => next(err));
};