'use strict';

const { getPayments, getOnePayment, postPayment, replacePayment, deletePayment, paymentTypeMatch } = require('../models/PaymentOption'); 

module.exports.getAllPmtOptions = (req, res, next) => {
    getPayments()//from models folder
    .then( (pmtOptions) => {
        res.status(200).json(pmtOptions);
    })
    .catch( (err) => next(err));
};

module.exports.getOnePmtOptionById = (req, res, next) => {
    getOnePayment(req.params.id)//method from PaymentOption.js
    .then( (pmtOpt) => {
        res.status(200).json(pmtOpt);
    })
    .catch( (err) => next(err));
};

module.exports.postPmtOption = (req, res, next) => {
    postPayment(req.body)
    .then( (data) => {
        res.status(200).end('Payment type posted.');
    })
    .catch( (err) => next(err));
};

//takes an ID and replaces the corresponding payment type
module.exports.replacePaymentOption = (req, res, next) => {
    replacePayment(req.params.id, req.body)//id and object with payment info passed in here
    .then( (data) => {
        res.status(200).end('Payment type replaced.');
    })
    .catch( (err) => next(err));
};

//deletes a specific payment option as long as that option doesn't exist as a property on an order
module.exports.deletePaymentOption = ({params: {id}}, res, next) => {
    paymentTypeMatch()//look for payment option match using paymentoption model function
    .then( (data) => { //data comes back as array - filter to get the ones that have a null payment type
        data.filter( (pmtTypeObj) => {
            if (pmtTypeObj.payment_type === null) {
                return pmtTypeObj;  //return the objects that have pmt type of null in orders table
            };
        }).map( (obj) => {//map through and return the id numbers of what is able to be deleted from paymentOptions table
            return obj.payment_id;
        }).forEach( (num) => {
            if(num == id) { //if number = id, delete payment option
                deletePayment(+id)//change id into number
                .then( () => {
                    res.status(200).end();
                });
            };
        });
        res.status(200).end();
    })
    .catch( (err) => next(err));
};