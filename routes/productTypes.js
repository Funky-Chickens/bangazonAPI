'use strict';

const { Router } = require('express');
const router = Router();

const { getProductTypes, getOneProductType, postProductType } = require('../controllers/productTypesCtrl');

router.get('/producttypes', getProductTypes);
router.get('/producttypes/:id', getOneProductType);
router.post('/producttypes', postProductType);

module.exports = router;