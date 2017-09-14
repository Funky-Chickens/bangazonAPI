'use strict';

const { getAll, getOne, addType, replaceType } = require('../models/ProductType');

//grabs all product types
module.exports.getProductTypes = (req, res, next) => {
    getAll()
    .then( (prodTypes) => {
        res.status(200).json(prodTypes);
    })
    .catch( (err) => {
        next(err);
    });
};

//grabs a single producttype by product ID
module.exports.getOneProductType = ({params: {id}}, res, next) => {
    getOne(id)
    .then( (prodType) => {
        res.status(200).json(prodType);
    })
    .catch( (err) => next(err));
};

//posts a new product type
module.exports.postProductType = (req, res, next) => {
    addType(req.body)
    .then( (data) => {
        res.status(200).end();
    })
    .catch( (err) => next(err));
};

//takes an ID and replaces the corresponding product type
module.exports.replaceProductType = (req, res, next) => {
    replaceType(req.params.id, req.body)
    .then( (data) => {
        res.status(200).end();
    })
    .catch( (err) => next(err));
};