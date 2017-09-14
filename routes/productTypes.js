'use strict';

const { Router } = require('express');
const router = Router();

const { getProductTypes, getOneProductType } = require('../controllers/productTypesCtrl');

router.get('/producttypes', getProductTypes);
router.get('/producttypes/:id', getOneProductType);

module.exports = router;