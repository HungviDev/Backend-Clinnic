const express = require('express');
const router = express.Router();

const paymentController = require('./payment.controller');

router.get('/', paymentController.getAllPayments);

router.post('/', paymentController.createPayment);

module.exports = router;