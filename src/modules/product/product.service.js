const { pool } = require('../../common/config/db');

const getProducts = async (filters = {}) => {
  try {
    const { keyword, category } = filters;

    let sql = `SELECT * FROM products WHERE 1=1`;
    let values = [];
    if (keyword) {
      sql += ` AND (name LIKE ? OR description LIKE ?)`;
      values.push(`%${keyword}%`, `%${keyword}%`);
    }

    if (category) {
      sql += ` AND category = ?`;
      values.push(category);
    }
    const [rows] = await pool.execute(sql, values);
    if(rows.length === 0){
      throw new Error('Not found product');
    }
    return rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getProducts
};