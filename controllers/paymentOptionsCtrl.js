'use strict';

//export getAllPmtOptions, getOnePmtOptionById, postPmtOption
//require in models files for payment options
const{getPayments, getOnePayment, postPayment}= require('../models/PaymentOption'); //and whatever other methods exported

module.exports.getAllPmtOptions=(req, res, next)=>{
    getPayments()//from models folder
    .then((pmtOptions)=>{
        res.status(200).json(pmtOptions);
    })
    .catch((err)=>{
        next(err);
    })
};

module.exports.getOnePmtOptionById =(req, res, next)=>{
    getOnePayment(req.params.id)//method from PaymentOption.js
    .then((pmtOpt)=>{
        res.status(200).json(pmtOpt);
    })
    .catch((err)=>{
        next(err);
    })
}

//dev must set postman to JSON format for these too.
module.exports.postPmtOption = (req, res, next) => {
    postPayment(req.body)
    .then((data) => {
        res.status(200);
    })
    .catch((err)=>{
        next(err);
    })
}

//do module.exports for other methods here:  PUT & DELETE

