 'use strict'

const { Router }= require('express');
const router = Router();

//require in controller method calls
const { getAll, getOneOrderById, postOrder, postProdOrder, deleteOneOrder, deleteOneProdOrder, putOrder, getOrdersByUser } = require('../controllers/ordersCtrl');//along with methods for post put etc...

router.get('/orders', getAll);//if this route, get all
router.get('/orders/:id', getOneOrderById);//if this route, get one using id passed in url
router.get('/orders/user/:uid', getOrdersByUser);
router.post('/orders', postOrder);
router.delete('/orders/:id', deleteOneOrder);
router.put('/orders/:id', putOrder);
router.post('/productorder', postProdOrder);
router.delete('/productorder/:id', deleteOneProdOrder);


module.exports = router;