'use strict'

const{Router}= require('express');
const router = Router();

//require in controller method calls
const{getAllPmtOptions, getOnePmtOptionById, postPmtOption}= require('../controllers/paymentOptionsCtrl');//along with methods for post put etc...

router.get('/payments', getAllPmtOptions);//if this route, get all
router.get('/payments/:id', getOnePmtOptionById);//if this route, get one using id passed in url
router.post('/payments', postPmtOption);


module.exports = router;