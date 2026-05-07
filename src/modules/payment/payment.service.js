const { pool } = require('../../common/config/db');

const getPayments = async () => {
    const [rows] = await pool.execute(
        `
        SELECT 
            payments.*,
            users.full_name
        FROM payments
        JOIN users
        ON payments.user_id = users.id
        `
    );

    return rows;
};

const createPayment = async (data) => {
    const {
        user_id,
        appointment_id,
        amount,
        method,
        status
    } = data;

    const [result] = await pool.execute(
        `
        INSERT INTO payments
        (
            user_id,
            appointment_id,
            amount,
            method,
            status
        )
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            user_id,
            appointment_id,
            amount,
            method,
            status
        ]
    );

    return result;
};

module.exports = {
    getPayments,
    createPayment
};