const express = require('express');
const router = express.Router();

const productController = require('./product.controller');
const middleware = require('../../common/middleware/auth.middleware');

router.get(
  '/',
  middleware.authMiddleware,
  productController.getAllProducts
);

module.exports = router;