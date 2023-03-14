import express from 'express';
import productsRoute from './routes/Products';
import userRoute from './routes/User';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);
app.use('/users', userRoute);

export default app;
