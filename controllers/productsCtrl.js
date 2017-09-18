'use strict';

const { getProducts, getOneProduct, putProduct, postprodObj, productMatch, deleteOneProduct } = require('../models/Product');

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

// module.exports.deleteOneProduct = ({params: {id}}, res, next) => {
//     deleteOneProduct(id)
//     .then( () => {
//         res.status(200).end();
//     })
//     .catch( (err) => next(err));
// };

module.exports.postprodObj = (req, res, next) => {
    postprodObj(req.body)
    .then( () => {
        res.status(200).end();
    })
    .catch( (err) => next(err));
};


module.exports.putProduct = (req, res, next) => {
    putProduct(req.params.id, req.body)
    .then((data) => {
        res.status(200).end();
    })
    .catch((err)=>{
        next(err);
    })
}

module.exports.deleteAProduct = ({params: {id}}, res, next) => {
    productMatch()//look for productType match
    .then( (data) => { //data comes back as array - filter out
        data.map( (obj) => {//map through and return the type id numbers of the ones we can delete
            return obj.product_id;
        }).forEach( (num) => {
            if(num == id){ //if number = id, delete it
                deleteOneProduct(+id)//change id into number
                .then( () => {
                    res.end(); //res.status(200).end();  ?
                });
            }
        });
        res.end();//res.status(200).end();  ?
    })
    .catch((err)=>{
        next(err);
    });

};
