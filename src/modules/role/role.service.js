const { pool } = require('../../common/config/db');

const getRoles = async () => {
    const [rows] = await pool.execute(
        'SELECT * FROM roles'
    );

    return rows;
};

const createRole = async (name) => {
    const [result] = await pool.execute(
        'INSERT INTO roles(name) VALUES(?)',
        [name]
    );

    return result;
};

module.exports = {
    getRoles,
    createRole
};