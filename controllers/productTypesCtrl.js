'use strict';

const { getAll, getOne, addType } = require('../models/ProductType');

module.exports.getProductTypes = (req, res, next) => {
    getAll()
    .then( (prodTypes) => {
        res.status(200).json(prodTypes);
    })
    .catch( (err) => {
        next(err);
    });
};

module.exports.getOneProductType = ({params: {id}}, res, next) => {
    getOne(id)
    .then( (prodType) => {
        res.status(200).json(prodType);
    })
    .catch( (err) => next(err));
};

module.exports.postProductType = (req, res, next) => {
    addType(req.body)
    .then( (data) => {
        res.status(200);
    })
    .catch( (err) => next(err));
};

module.exports.replaceProductType = (req, res, next) => {
    replaceType(req.body)
    .then( (data) => {
        res.status(200);
    })
    .catch( (err) => next(err));
};