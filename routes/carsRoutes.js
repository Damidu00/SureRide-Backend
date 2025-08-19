import express from 'express';
import { createCar } from '../controllers/carsController.js';

const carRoutes = express.Router()

carRoutes.post('/',createCar);

export default carRoutes