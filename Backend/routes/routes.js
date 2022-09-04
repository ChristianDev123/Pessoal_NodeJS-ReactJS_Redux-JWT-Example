const { Router } = require('express');
const route = Router();
const UserController = require('../controllers/UserController');
const Controller = require('../controllers/controller');
route.get('/migration',Controller.migrate);
route.post('/login',UserController.index);
route.post('/register',UserController.create);
route.get('/testjwt',Controller.TestJWT)
module.exports = route;