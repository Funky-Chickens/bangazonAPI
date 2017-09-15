'use strict'

const { Router } = require('express');
const router = Router();

//require in controller method calls
const { getAll, getOneUserById, postUser, putUser, getUsersWithNoOrders } = require('../controllers/usersCtrl');//along with methods for post put etc...

router.get('/users', getUsersWithNoOrders);
router.get('/users', getAll);//if this route, get all
router.get('/users/:id', getOneUserById);//if this route, get one using id passed in url
router.post('/users', postUser);
router.put('/users/:id', putUser);


module.exports = router;
