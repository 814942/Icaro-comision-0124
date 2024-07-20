const express = require('express');

const securityRouter = require('./security-router');
const userRouter = require('./user-router');
const characterRouter = require('./character-router');
const houseRouter = require('./house-router');

const verifyToken = require('../middlewares/verify-token');

const router = express.Router();

// public route
router.use("/security", securityRouter)
// private routes
router.use("/me", verifyToken, userRouter)
router.use("/characters", verifyToken, characterRouter)
router.use("/houses", verifyToken, houseRouter)

module.exports = router