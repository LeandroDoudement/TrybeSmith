import express from 'express';
import productsRoute from './routes/Products';
import userRoute from './routes/User';
import ordersRoute from './routes/Orders';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', userRoute);
app.use('/orders', ordersRoute);

export default app;
