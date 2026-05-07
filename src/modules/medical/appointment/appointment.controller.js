const appointmentService = require('./appointment.service');

const getAllAppointments = async (req, res) => {
    try {
        const appointments = await appointmentService.getAppointments();

        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getAppointmentDetail = async (req, res) => {
    try {
        const appointment =
            await appointmentService.getAppointmentById(
                req.params.id
            );

        if (!appointment) {
            return res.status(404).json({
                message: 'Appointment not found'
            });
        }

        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const createAppointment = async (req, res) => {
    try {
        await appointmentService.createAppointment(req.body);

        res.status(201).json({
            message: 'Create appointment success'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getAllAppointments,
    getAppointmentDetail,
    createAppointment
};