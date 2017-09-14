
'use strict'

const{Router}= require('express');
const router = Router();

//require in all route files
router.use(require('./users'));
router.use(require('./producttypes'));
router.use(require('./paymentOptions'));


//set up get for the home route with guidance based on bangazonAPI/v1/ route
router.get('/', (req, res)=>{
    res.json({
	//list of routes as endpoint guidance for developers
    "users":"bangazonAPI/v1/users",
    "paymentOptions":"bangazonAPI/v1/payments"
    //etc
    });
});

module.exports = router;