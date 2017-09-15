'use strict'

const{Router}= require('express');
const router = Router();

//require in controller method calls
const{getAllPmtOptions, getOnePmtOptionById, postPmtOption, replacePaymentOption, deletePaymentOption }= require('../controllers/paymentOptionsCtrl');//along with methods for post put etc...

router.put('/payments/:id', replacePaymentOption);
router.get('/payments', getAllPmtOptions);//if this route, get all
router.get('/payments/:id', getOnePmtOptionById);//if this route, get one using id passed in url
router.post('/payments', postPmtOption);
router.delete('/payments/:id', deletePaymentOption);


module.exports = router;