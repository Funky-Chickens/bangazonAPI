'use strict';

const { Router } = require('express');
const router = Router();

const { getProductTypes, getOneProductType, postProductType, replaceProductType, deleteAProductType } = require('../controllers/productTypesCtrl');

router.get('/producttypes', getProductTypes);
router.get('/producttypes/:id', getOneProductType);
router.post('/producttypes', postProductType);
router.put('/producttypes/:id', replaceProductType);
router.delete('/producttypes/:id', deleteAProductType);

module.exports = router;