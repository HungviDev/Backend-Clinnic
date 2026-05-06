const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./src/modules/auth/auth.routes')
app.use(cors());
app.use(express.json());
app.use('/auth',authRouter)
module.exports = app;