const express = require('express');
const router = express.Router();

const orderController = require('./order.controller');

router.get('/', orderController.getAllOrders);

router.get('/:id', orderController.getOrderDetail);

router.post('/', orderController.createOrder);

module.exports = router;