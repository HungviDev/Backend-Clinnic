const { pool } = require('../../common/config/db');

const getAppointments = async () => {
    const [rows] = await pool.execute(
        `
        SELECT
            appointments.*,
            users.full_name AS patient_name,
            doctors.id AS doctor_id,
            doctor_users.full_name AS doctor_name,
            services.name AS service_name
        FROM appointments
        JOIN users
            ON appointments.user_id = users.id
        JOIN doctors
            ON appointments.doctor_id = doctors.id
        JOIN users AS doctor_users
            ON doctors.user_id = doctor_users.id
        JOIN services
            ON appointments.service_id = services.id
        `
    );

    return rows;
};

const getAppointmentById = async (id) => {
    const [rows] = await pool.execute(
        `
        SELECT *
        FROM appointments
        WHERE id = ?
        `,
        [id]
    );

    return rows[0];
};

const createAppointment = async (data) => {
    const {
        user_id,
        doctor_id,
        service_id,
        appointment_date,
        status,
        note
    } = data;

    const [result] = await pool.execute(
        `
        INSERT INTO appointments
        (
            user_id,
            doctor_id,
            service_id,
            appointment_date,
            status,
            note
        )
        VALUES (?, ?, ?, ?, ?, ?)
        `,
        [
            user_id,
            doctor_id,
            service_id,
            appointment_date,
            status,
            note
        ]
    );

    return result;
};

module.exports = {
    getAppointments,
    getAppointmentById,
    createAppointment
};