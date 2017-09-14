'use strict';

const { Router } = require('express');
const router = Router();

const { getProducts, getOneProduct, deleteOneProduct, putProduct, postprodObj } = require('../controllers/productsCtrl');

router.get('/products', getProducts);
router.get('/products/:id', getOneProduct);
router.delete('/products/:id', deleteOneProduct);
router.put('/products/:id', putProduct);
router.post('/products', postprodObj)

module.exports = router;