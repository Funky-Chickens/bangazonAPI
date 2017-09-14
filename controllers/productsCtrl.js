'use strict';

const { getProducts, getOneProduct } = require('../models/Product');

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