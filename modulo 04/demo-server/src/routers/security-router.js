const express = require('express');

const login = require('../controllers/security/login');
const register = require('../controllers/security/register');

const securityRouter = express.Router()

securityRouter.post("/login", login);
securityRouter.post("/register", register);

module.exports = securityRouter;