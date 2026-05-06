const {pool} = require('../../common/config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginService = async (email,password) => {
    const [row] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if(row.length==0){
        throw new Error('Email not found');
        return;
    }
    const user = row[0];
    const isPassWord = await bcrypt.compare(password, user.password);
    if(!isPassWord){
        throw new Error('Password incorrect');
        return;
    }
    const payload  = {
        id : user.id,
        role : user.role_id
    }
    const token  = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES_IN});
    return token;
}

const register = async (data) => {
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
    const [rows] = await pool.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
    );
    if (rows.length > 0) {
        return {
            success: false,
            message: 'Email already exists'
        };
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
        `INSERT INTO users 
        (full_name, phone, password, birth_date, address, avatar, role_id, email) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            full_name,
            phone,
            hashPassword,
            birth_date,
            address,
            avatar || null,
            role_id,
            email
        ]
    );
    return {
        success: true,
        data: {
            id: result.insertId,
            full_name,
            email
        }
    };
};
module.exports = {
    loginService,
    register
}