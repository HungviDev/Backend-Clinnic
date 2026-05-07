const doctorService = require('./doctor.service');

const getAllDoctors = async (req, res) => {
    try {
        const doctors = await doctorService.getDoctors();

        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getDoctorDetail = async (req, res) => {
    try {
        const doctor = await doctorService.getDoctorById(
            req.params.id
        );

        if (!doctor) {
            return res.status(404).json({
                message: 'Doctor not found'
            });
        }

        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const createDoctor = async (req, res) => {
    try {
        await doctorService.createDoctor(req.body);

        res.status(201).json({
            message: 'Create doctor success'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getAllDoctors,
    getDoctorDetail,
    createDoctor
};