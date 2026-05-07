const express = require('express');
const router = express.Router();

const doctorController = require('./doctor.controller');

router.get('/', doctorController.getAllDoctors);

router.get('/:id', doctorController.getDoctorDetail);

router.post('/', doctorController.createDoctor);

module.exports = router;