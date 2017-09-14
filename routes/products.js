'use strict';

const { Router } = require('express');
const router = Router();

const { getProducts, getOneProduct, deleteOneProduct } = require('../controllers/productsCtrl');

router.get('/products', getProducts);
router.get('/products/:id', getOneProduct);
router.delete('/products/:id', deleteOneProduct);

module.exports = router;