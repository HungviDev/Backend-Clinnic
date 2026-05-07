const { pool } = require('../../common/config/db');

const getOrders = async () => {
    const [rows] = await pool.execute(
        `
        SELECT 
            orders.*,
            users.full_name
        FROM orders
        JOIN users
        ON orders.user_id = users.id
        `
    );

    return rows;
};

const getOrderDetail = async (id) => {
    const [rows] = await pool.execute(
        `
        SELECT 
            order_items.*,
            products.name,
            products.image
        FROM order_items
        JOIN products
        ON order_items.product_id = products.id
        WHERE order_items.order_id = ?
        `,
        [id]
    );

    return rows;
};

const createOrder = async (data) => {
    const {
        user_id,
        total,
        status
    } = data;

    const [result] = await pool.execute(
        `
        INSERT INTO orders
        (
            user_id,
            total,
            status
        )
        VALUES (?, ?, ?)
        `,
        [
            user_id,
            total,
            status
        ]
    );

    return result;
};

module.exports = {
    getOrders,
    getOrderDetail,
    createOrder
};