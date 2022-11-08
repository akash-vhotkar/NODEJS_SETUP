const router  = require('express').Router();
const controller  = require('./controller');

router.get('/', (req, res)=>{
    res.send('HELLOW FROM SERVER ');
});
router.get('/env', (req, res)=>{
const Name  = process.env.NAME;
    res.send('The env variable is the ');
})
router.get('/all', controller.getAllUsers);
router.post('/',controller.createNewUser);
router.get('/:id', controller.findUserById)
module.exports  = router;
