import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectToDatabase from './config/db';
import { APP_ORIGIN, NODE_ENV, PORT } from './constants/env';
import cookieParser from 'cookie-parser';
import errorHandler from './middleware/errorHandler';
import { OK } from './constants/http';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: APP_ORIGIN,
        credentials: true,

    }) 
)
app.use(cookieParser());

app.get('/', (req, res,next) => {
    res.status(OK).json({ status: "healthy" });
});

app.use("/auth", authRoutes);

app.use(errorHandler);

app.listen(5000, async() => {
    console.log(`Server is running on port ${PORT} ${NODE_ENV} environment`);
    await connectToDatabase ();
});