'use strict'

const{Router}= require('express');
const router = Router();

//require in controller method calls
const{getAll, getOneOrderById, postOrder}= require('../controllers/ordersCtrl');//along with methods for post put etc...

router.get('/orders', getAll);//if this route, get all
router.get('/orders/:id', getOneOrderById);//if this route, get one using id passed in url
router.post('/orders', postOrder);


module.exports = router;