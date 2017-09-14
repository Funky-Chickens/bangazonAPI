'use strict';

const { Router } = require('express');
const router = Router();

const { getProducts, getOneProduct } = require('../controllers/productsCtrl');

router.get('/products', getProducts);
router.get('/products/:id', getOneProduct);

module.exports = router;