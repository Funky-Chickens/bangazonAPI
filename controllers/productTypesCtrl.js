'use strict';

const { getAll, getOne } = require('models/ProductType');

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
}