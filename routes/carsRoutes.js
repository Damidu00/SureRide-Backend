import express from 'express';
import { createCar, getAllcars, getcarById } from '../controllers/carsController.js';

const carRoutes = express.Router()

carRoutes.post('/',createCar);
carRoutes.get('/',getAllcars)
carRoutes.get('/:id',getcarById)


export default carRoutes