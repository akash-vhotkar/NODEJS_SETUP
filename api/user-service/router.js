const router  = require('express').Router();
const controller  = require('./controller');

router.get('/', controller.getAllUsers);
router.post('/',controller.createNewUser);
router.get('/:id', controller.findUserById)
module.exports  = router;
