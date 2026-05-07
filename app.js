const express = require('express');
const app = express();

const cors = require('cors');

const authRouter = require('./src/modules/auth/auth.routes');
const productRouter = require('./src/modules/product/product.routes');

const userRouter = require('./src/modules/user/user.routes');
const roleRouter = require('./src/modules/role/role.routes');

const paymentRouter = require('./src/modules/payment/payment.routes');
const orderRouter = require('./src/modules/order/order.routes');

const doctorRouter = require('./src/modules/doctor/doctor.routes');
const appointmentRouter = require('./src/modules/appointment/appointment.routes');app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);

app.use('/products', productRouter);

app.use('/users', userRouter);

app.use('/roles', roleRouter);

app.use('/payments', paymentRouter);

app.use('/orders', orderRouter);


app.use('/doctors', doctorRouter);

app.use('/appointments', appointmentRouter);

module.exports = app;