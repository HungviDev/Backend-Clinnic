const { pool } = require('../../common/config/db');

const getDoctors = async () => {
    const [rows] = await pool.execute(
        `
        SELECT
            doctors.*,
            users.full_name,
            users.email,
            users.phone,
            users.avatar
        FROM doctors
        JOIN users
        ON doctors.user_id = users.id
        `
    );

    return rows;
};

const getDoctorById = async (id) => {
    const [rows] = await pool.execute(
        `
        SELECT
            doctors.*,
            users.full_name,
            users.email,
            users.phone,
            users.avatar
        FROM doctors
        JOIN users
        ON doctors.user_id = users.id
        WHERE doctors.id = ?
        `,
        [id]
    );

    return rows[0];
};

const createDoctor = async (data) => {
    const {
        user_id,
        specialization,
        experience_years
    } = data;

    const [result] = await pool.execute(
        `
        INSERT INTO doctors
        (
            user_id,
            specialization,
            experience_years
        )
        VALUES (?, ?, ?)
        `,
        [
            user_id,
            specialization,
            experience_years
        ]
    );

    return result;
};

module.exports = {
    getDoctors,
    getDoctorById,
    createDoctor
};