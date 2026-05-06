const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
const connectDB = async () => {
  try {
    // 🔥 DEBUG ENV TRƯỚC KHI CONNECT
    console.log("========== ENV DEBUG ==========");
    console.log("DB_HOST:", process.env.DB_HOST);
    console.log("DB_USER:", process.env.DB_USER);
    console.log("DB_PASS:", process.env.DB_PASS);
    console.log("DB_NAME:", process.env.DB_NAME);
    console.log("================================");

    const connection = await pool.getConnection();

    console.log("✅ MySQL connected");
    connection.release();
  } catch (error) {
    console.error("❌ DB connection error:", error);
  }
};

module.exports = { pool, connectDB };