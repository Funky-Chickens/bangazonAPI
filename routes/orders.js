 'use strict'

const{Router}= require('express');
const router = Router();

//require in controller method calls
const{getAll, getOneOrderById, postOrder, deleteOneOrder, putOrder}= require('../controllers/ordersCtrl');//along with methods for post put etc...

router.get('/orders', getAll);//if this route, get all
router.get('/orders/:id', getOneOrderById);//if this route, get one using id passed in url
router.post('/orders', postOrder);
router.delete('/orders/:id', deleteOneOrder);
router.put('/orders/:id', putOrder);


module.exports = router;