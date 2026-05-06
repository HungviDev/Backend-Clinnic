require("dotenv").config(); // 👈 PHẢI ở đây

const express = require("express");
const { connectDB } = require("./src/common/config/db");
const app = require("./app");
connectDB();
app.listen(3000, () => {
    console.log(`🚀 Server running at http://localhost:3000`);
});