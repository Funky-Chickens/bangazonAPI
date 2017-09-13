'use strict'

const{Router}= require('express');
const router = Router();

//require in controller method calls
const{getAll, getOneUserById}= require('../controllers/usersCtrl');//along with methods for post put etc...

router.get('/users', getAll);//if this route, get all
router.get('/users/:id', getOneUserById);//if this route, get one using id passed in url

module.exports = router;
