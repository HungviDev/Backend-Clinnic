const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
router.post('/login', authController.loginController);
router.post('/register', authController.registerController);
module.exports = router;