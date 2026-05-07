const paymentService = require('./payment.service');

const getAllPayments = async (req, res) => {
    try {
        const payments = await paymentService.getPayments();

        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const createPayment = async (req, res) => {
    try {
        await paymentService.createPayment(req.body);

        res.status(201).json({
            message: 'Create payment success'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getAllPayments,
    createPayment
};