const router  = require('express').Router();
const userRouter  = require('./user-service/router');


router.use('/user', userRouter)
module.exports  =router;
