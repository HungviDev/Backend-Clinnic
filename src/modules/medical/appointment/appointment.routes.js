const express = require('express');
const router = express.Router();

const appointmentController = require('./appointment.controller');

router.get('/', appointmentController.getAllAppointments);

router.get('/:id', appointmentController.getAppointmentDetail);

router.post('/', appointmentController.createAppointment);

module.exports = router;