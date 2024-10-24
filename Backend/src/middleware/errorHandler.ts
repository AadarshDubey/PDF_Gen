import { Request, Response, NextFunction } from 'express';
import { INTERNAL_SERVER_ERROR } from '../constants/http';

const errorHandler = (error, req ,res ,next) => {
    console.log(`PATH: ${req.path}`,error);
    return res.status(INTERNAL_SERVER_ERROR).json({ message: "Something went wrong" });
};

export default errorHandler;