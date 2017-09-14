'use strict';

const { Router } = require('express');
const router = Router();

const { getProductTypes, getOneProductType, postProductType, replaceProductType } = require('../controllers/productTypesCtrl');

router.get('/producttypes', getProductTypes);
router.get('/producttypes/:id', getOneProductType);
router.post('/producttypes', postProductType);
router.put('/producttypes/:id', replaceProductType);

module.exports = router;