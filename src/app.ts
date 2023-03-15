import express from 'express';
import productsRoute from './routes/Products';
import userRoute from './routes/User';
import ordersRoute from './routes/Orders';
import loginRoute from './routes/Login';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', userRoute);
app.use('/orders', ordersRoute);
app.use('/login', loginRoute);

export default app;
