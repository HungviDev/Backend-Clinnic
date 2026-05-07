const { pool } = require('../../common/config/db');

const getUsers = async () => {
    const [rows] = await pool.execute(
        'SELECT * FROM users'
    );

    return rows;
};

const getUserById = async (id) => {
    const [rows] = await pool.execute(
        'SELECT * FROM users WHERE id = ?',
        [id]
    );

    return rows[0];
};

const createUser = async (data) => {
    const {
        full_name,
        phone,
        password,
        birth_date,
        address,
        avatar,
        role_id,
        email
    } = data;

    const [result] = await pool.execute(
        `
        INSERT INTO users
        (
            full_name,
            phone,
            password,
            birth_date,
            address,
            avatar,
            role_id,
            email
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
            full_name,
            phone,
            password,
            birth_date,
            address,
            avatar,
            role_id,
            email
        ]
    );

    return result;
};

module.exports = {
    getUsers,
    getUserById,
    createUser
};