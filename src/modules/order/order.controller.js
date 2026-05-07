const orderService = require('./order.service');

const getAllOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders();

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getOrderDetail = async (req, res) => {
    try {
        const order = await orderService.getOrderDetail(
            req.params.id
        );

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const createOrder = async (req, res) => {
    try {
        await orderService.createOrder(req.body);

        res.status(201).json({
            message: 'Create order success'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getAllOrders,
    getOrderDetail,
    createOrder
};