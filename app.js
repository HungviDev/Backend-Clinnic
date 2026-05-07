const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./src/modules/auth/auth.routes')
const productRouter = require('./src/modules/product/product.routes')
app.use(cors());
app.use(express.json());
app.use('/auth',authRouter);
app.use('/products',productRouter);
module.exports = app;