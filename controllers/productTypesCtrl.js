'use strict';

const { getAll, getOne, addType, replaceType, deleteType, productTypeMatch } = require('../models/ProductType');

//grabs all product types
module.exports.getProductTypes = (req, res, next) => {
    getAll()
    .then( (prodTypes) => {
        res.status(200).json(prodTypes);
    })
    .catch( (err) => next(err));
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
        res.status(200).end('New product type posted.');
    })
    .catch( (err) => next(err));
};

//takes an ID and replaces the corresponding product type
module.exports.replaceProductType = (req, res, next) => {
    replaceType(req.params.id, req.body)
    .then( (data) => {
        res.status(200).end('Product type replaced.');
    })
    .catch( (err) => next(err));
};

//deletes a specific product type as long as that type doesn't exist as a property on a product
module.exports.deleteAProductType = ({params: {id}}, res, next) => {
    productTypeMatch()//look for productType match
    .then( (data) => { //data comes back as array - filter out
        data.filter( (prodTypeObj) => {
            if (prodTypeObj.product_type_id === null){
                return prodTypeObj;  //return the objects that have product_type_id of null
            }
        }).map( (obj) => {//map through and return the type id numbers of the ones able to delete
            return obj.type_id;
        }).forEach( (num) => {
            if(num == id){ //if number = id, delete it
                deleteType(+id)//change id into number
                .then( () => {
                    res.status(200).end();
                });
            };
        });
        res.status(200).end();
    })
    .catch( (err) => next(err));
};