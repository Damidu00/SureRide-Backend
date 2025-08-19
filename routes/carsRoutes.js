import express from 'express';
import { createCar, getAllcars } from '../controllers/carsController.js';

const carRoutes = express.Router()

carRoutes.post('/',createCar);
carRoutes.get('/',getAllcars)

export default carRoutes