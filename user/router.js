const Express = require('express');
const router = Express.Router();

const Controller = require('./controller');
const userController = new Controller();
router.post('/register' , userController.create);

module.exports = router;